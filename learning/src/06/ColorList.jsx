import React from 'react';

const ColorList = ({ colors = [] }) => {
    return (
        <div className="color-list">
            {(colors.length === 0) ?
                <p>색이 없습니다. (색을 추가해주세요.)</p> :
                colors.map(color => 
                    )}
        </div>
    );
};

export default ColorList;