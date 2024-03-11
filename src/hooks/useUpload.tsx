import { useState } from "react";
import {
	useDropzone,
	DropzoneRootProps,
	DropzoneInputProps,
} from "react-dropzone";

export interface FilePreview {
	url: string;
	index: number;
}

interface UploadHookProps {
	// eslint-disable-next-line no-unused-vars
	setFileChange?: (files: File[]) => void;
}

interface UploadHookResult {
	files: File[];
	preview: FilePreview[];
	// eslint-disable-next-line no-unused-vars
	getRootProps: (props?: DropzoneRootProps) => DropzoneRootProps;

	// eslint-disable-next-line no-unused-vars
	getInputProps: (props?: DropzoneInputProps) => DropzoneInputProps;
	removeFile: () => void;
	// eslint-disable-next-line no-unused-vars
	removeSingleFile: (index: number) => void;
}

export const useUpload = ({
	setFileChange,
}: UploadHookProps): UploadHookResult => {
	const [files, setFiles] = useState<File[]>([]);
	const [preview, setPreview] = useState<FilePreview[]>([]);

	const getBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
		return new Promise((resolve, reject) => {
			const reader: FileReader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	};

	const onDrop = async (acceptedFiles: File[]) => {
		setFiles([...files, ...acceptedFiles]);
		setFileChange?.([...files, ...acceptedFiles]);

		const b64arr: FilePreview[] = [];
		const pr_arr = acceptedFiles.map(
			(item: File, i: number) =>
				// eslint-disable-next-line no-async-promise-executor
				new Promise(async (res) => {
					const b64 = (await getBase64(item)) as string;
					b64arr.push({ url: b64, index: i });
					res(null);
				})
		);

		await Promise.all(pr_arr);
		setPreview([...preview, ...b64arr]);
	};

	const removeFile = () => {
		setFiles([]);
		setPreview([]);
	};

	const removeSingleFile = (index: number) => {
		// eslint-disable-next-line no-unused-vars
		const updatedFiles = files.filter((_item, i) => i !== index);
		// eslint-disable-next-line no-unused-vars
		const updatedPreviewFiles = preview.filter((_item, i) => i !== index);
		setFiles(updatedFiles);
		setPreview(updatedPreviewFiles);
	};

	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return {
		files,
		preview,
		getRootProps,
		getInputProps,
		removeFile,
		removeSingleFile,
	};
};
