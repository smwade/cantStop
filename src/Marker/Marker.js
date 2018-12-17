import React from 'react'
import './Marker.css'

const Marker = (props) => {
  return (
    <div className="markerWrapper">
        <svg width="99px" height="99px" viewBox="0 0 99 99" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <defs>
                <circle id="path-1" cx="33" cy="33" r="33"></circle>
                <filter x="-3.0%" y="-3.0%" width="106.1%" height="106.1%" filterUnits="objectBoundingBox" id="filter-2">
                    <feGaussianBlur stdDeviation="1.5" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
                    <feOffset dx="0" dy="1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
                    <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
                </filter>
                <circle id="path-3" cx="33.5" cy="33.5" r="24.5"></circle>
                <filter x="-76.5%" y="-76.5%" width="253.1%" height="253.1%" filterUnits="objectBoundingBox" id="filter-4">
                    <feMorphology radius="2.5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                    <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                    <feGaussianBlur stdDeviation="10" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                </filter>
            </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="marker" transform="translate(16.000000, 16.000000)">
                    <g id="outside">
                        <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-1"></use>
                        <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                    </g>
                    <g id="inside">
                        <use fill="black" fill-opacity="1" filter="url(#filter-4)" xlinkHref="#path-3"></use>
                        <use fill="#FFFFFF" fill-rule="evenodd" xlinkHref="#path-3"></use>
                    </g>
                </g>
            </g>
        </svg>
    </div>
  )
};

export default Marker;
