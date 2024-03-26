import { type PropsWithChildren } from 'preact/compat';

type Props = {
	name: string
};

export default function Greeting( { name, children }: PropsWithChildren<Props>) {
	return (
		<>
			<div>Hello: {name}</div>
      {children}
		</>
	);
}