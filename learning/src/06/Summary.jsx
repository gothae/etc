import PropTypes from 'prop-types';
const Summary = ({ ingredients, stpes, title }) => {
    return(
        <div className="summary">
            <h1>{title}</h1>
            <p>
                <span>재료 {ingredients} 종류 |</span>
                <span>총 {stpes} 단계</span>
            </p>
        </div>
    )
}
Summary.propTypes={
    ingredients : PropTypes.number,
    steps : PropTypes.number,
    title : (props, propName) => 
        (typeof props[propName] !== 'string') ?
            new Error("제목은 문자열이어야 합니다."):
            (props[propName].length > 20) ?
                new Error("제목은 20자 이내어야 합니다") :
                null
}
Summary.defaultProps = {
    ingredients : 0,
    steps : 0,
    title : "[무제]"
}