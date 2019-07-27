import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import { useDrag, useDrop } from 'react-dnd'
import Types from 'prop-types'

const defaultPic = process.env.PUBLIC_URL + 'images/defaultPic.png'

const styles = {
  backgroundColor: 'lightyellow',
  padding: '10px',
  marginBottom: '20px',
  border: '1px solid silver',
  borderRadius: 3
}

const Note = ({ id, columnIndex, header, text, image, onNoteDrop }) => {
  const [, drag] = useDrag({
    item: { type: 'Note', id, columnIndex },
    collect: monitor => ({ isDragging: !!monitor.isDragging() })
  })

  const [, drop] = useDrop({
    accept: 'Note',
    drop: (item) => onNoteDrop(item.id, id, item.columnIndex),
    collect: monitor => ({ isOver: !!monitor.isOver() })
  })

  return (
    <div ref={drop}>
      <div style={styles} ref={drag}>
        { header && (<Header as='h3'>{ header }</Header>) }

        { text && (<p>{ text }</p>) }

        { image && (<Image src={defaultPic} />)}
      </div>
    </div>
  )
}

Note.propTypes = {
  id: Types.string.isRequired,
  header: Types.string,
  text: Types.string,
  image: Types.bool
}

export default Note
