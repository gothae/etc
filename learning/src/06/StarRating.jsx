import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Star from './Star';

const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) => (
    <div className="star-rating">
        {/* 프로퍼티에서 totalStars를 가져와 Star 엘리먼트 갯수 정함 */}
        {/* Array생성자와 함께 스프레드 연산자 사용 => 필요한 Star 수 만큼 원소가 들어있는 배열 생성하고 그것을 map */}
        {[...Array(totalStars)].map((n,i)=> 
            <Star key={i} 
                selected={i<starsSelected} 
                onClick={()=>onRate(i+1)}/>)}
            {/* 0번쨰 Star가 클릭되면 starsSelected가 1로 바뀜` */}
        <p>별점 : {starsSelected} / {totalStars}</p>
    </div>
)
StarRating.propTypes = {
    totalStars : PropTypes.number
}
StarRating.defaultProps={
    totalStars : 5
}
export default StarRating;