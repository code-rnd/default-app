import React from 'react'

export default function DefaultComponent(props) {
    const {handleChangeText, currentText} = props
    return (
        <div>
            <div>
                <input type={'text'} placeholder={'display'} value={currentText} disabled={true}/>
            </div>
            <br/>
            <div>
                <input type={'text'} placeholder={'text'} onChange={e => handleChangeText(e.currentTarget.value)}/>
            </div>
        </div>
    )
}