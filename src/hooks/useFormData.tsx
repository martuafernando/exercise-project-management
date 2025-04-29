import { useState } from "react";
import type { ChangeEvent } from "react";

const useFormData = <T extends object>(
	initialState = {} as T,
): [T, (e: ChangeEvent) => void] => {
	const [formData, setFormData] = useState(initialState);

	const handleChange = (e: ChangeEvent) => {
		const { name, value } = e.target as HTMLInputElement;

		setFormData({
			...formData,
			[name]: value,
		});
	};

	return [formData, handleChange];
};

export default useFormData;
