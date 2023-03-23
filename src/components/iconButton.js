import { h } from 'preact';

function iconButton ({src, alt, onClick}) {
    return (
        <button onClick={onClick}>
            <img src={src} alt={alt} />
        </button>
    )
}