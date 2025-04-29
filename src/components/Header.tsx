export interface HeaderProps {
	className?: string
}

export function Header(props: Readonly<HeaderProps>) {
	return (
		<header className={props.className}>
			<div className="text-lg font-semibold">Dashboard</div>
		</header>
	);
}
