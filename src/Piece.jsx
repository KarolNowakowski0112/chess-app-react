import React from 'react'
import {useDrag, DragPreviewImage} from 'react-dnd'
import b_b from './assets/b_b.png'
import b_w from './assets/b_w.png'
import n_b from './assets/n_b.png'
import n_w from './assets/n_w.png'
import k_b from './assets/k_b.png'
import k_w from './assets/k_w.png'
import r_b from './assets/r_b.png'
import r_w from './assets/r_w.png'
import q_b from './assets/q_b.png'
import q_w from './assets/q_w.png'
import p_b from './assets/p_b.png'
import p_w from './assets/p_w.png'

export default function Piece({piece: {type, color}, position}) {  
    
    const [{isDragging}, drag, preview] = useDrag(() => ({
        type: 'piece',
        item: {
            type: 'piece',
            id: `${position}_${type}_${color}`},
        collect: (monitor) => {
            return {isDragging: !!monitor.isDragging()}
        },
    }))

    var pieceImg;

    if (color === 'w'){
        if (type === 'r'){
            pieceImg = r_w;
        }
        else if (type === 'n'){
            pieceImg = n_w;
        }
        else if (type === 'b'){
            pieceImg = b_w;
        }
        else if (type === 'k'){
            pieceImg = k_w;
        }
        else if (type === 'q'){
            pieceImg = q_w;
        }
        else if (type === 'p'){
            pieceImg = p_w;
        }
    }
    else if (color === 'b'){
        if (type === 'r'){
            pieceImg = r_b;
        }
        else if (type === 'n'){
            pieceImg = n_b;
        }
        else if (type === 'b'){
            pieceImg = b_b;
        }
        else if (type === 'k'){
            pieceImg = k_b;
        }
        else if (type === 'q'){
            pieceImg = q_b;
        }
        else if (type === 'p'){
            pieceImg = p_b;
        }
    }

    return (
        <>
        <DragPreviewImage connect={preview} src={pieceImg}/>
        <div className="piece-container" ref={drag} 
            style={{opacity: isDragging ? 0 : 1}}>
            <img src={pieceImg} alt="" className="piece"/> 
        </div> 
        </>
    )
}
//require(`./assets/${type}_${color}.png`) - didn't work, don't know why :(