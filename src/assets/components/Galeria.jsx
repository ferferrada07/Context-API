import "../css/galeria.css";

import Heart from "./Heart";

export default function Galeria({ mapPhotos, handleClick, display }) {
	return (
		<div className="galeria grid-columns-4 p-3">
			{mapPhotos?.map(({ id, src, liked }) => {
				return (
					<div key={id} id={id} className="foto" onClick={handleClick}>
						<Heart filled={liked} display={display} />
						<img src={src.tiny}></img>
					</div>
				);
			})}
		</div>
	);
}