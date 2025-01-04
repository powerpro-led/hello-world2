import React from "react";

interface MyButtonProps {
	label: string;
}

const MyButton: React.FC<MyButtonProps> = ({ label }) => {
	return <button>{label}</button>;
};

export default MyButton;
