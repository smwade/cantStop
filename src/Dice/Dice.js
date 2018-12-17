import React from 'react'
import './Dice.css'

const Dice = (props) => {
    let diceSvg;
    switch (props.value) {
        case 1:
            diceSvg = (
                <svg viewBox="0 0 125 125" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                    <desc>Created with Sketch.</desc>
                    <defs>
                        <rect id="path-1" x="0" y="0" width="117" height="117" rx="12"></rect>
                        <filter x="-6.0%" y="-4.3%" width="112.0%" height="112.0%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="dice_1" transform="translate(4.000000, 2.000000)">
                            <g id="Rectangle">
                                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                                <use fill="#FCDC80" fill-rule="evenodd" xlinkHref="#path-1"></use>
                                <rect stroke="#979797" stroke-width="1" x="0.5" y="0.5" width="116" height="116" rx="12"></rect>
                            </g>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="58.5" cy="61.5" r="12.5"></circle>
                        </g>
                    </g>
                </svg>
            )
            break;
        case 2:
            diceSvg = (
                <svg viewBox="0 0 125 125" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                    <defs>
                        <rect id="path-1" x="0" y="0" width="117" height="117" rx="12"></rect>
                        <filter x="-6.0%" y="-4.3%" width="112.0%" height="112.0%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="dice_2" transform="translate(4.000000, 2.000000)">
                            <g id="Rectangle">
                                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                                <use fill="#FCDC80" fill-rule="evenodd" xlinkHref="#path-1"></use>
                                <rect stroke="#979797" stroke-width="1" x="0.5" y="0.5" width="116" height="116" rx="12"></rect>
                            </g>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="27.5" cy="27.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="89.5" cy="89.5" r="12.5"></circle>
                        </g>
                    </g>
                </svg>
            )
            break;
        case 3:
            diceSvg = (
                <svg viewBox="0 0 125 125" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                    <defs>
                        <rect id="path-1" x="0" y="0" width="117" height="117" rx="12"></rect>
                        <filter x="-6.0%" y="-4.3%" width="112.0%" height="112.0%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="dice_3" transform="translate(4.000000, 2.000000)">
                            <g id="Rectangle">
                                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                                <use fill="#FCDC80" fill-rule="evenodd" xlinkHref="#path-1"></use>
                                <rect stroke="#979797" stroke-width="1" x="0.5" y="0.5" width="116" height="116" rx="12"></rect>
                            </g>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="27.5" cy="27.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="57.5" cy="58.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="89.5" cy="89.5" r="12.5"></circle>
                        </g>
                    </g>
                </svg>
            )
            break;
        case 4:
            diceSvg = (
                <svg viewBox="0 0 125 125" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                    <defs>
                        <rect id="path-1" x="0" y="0" width="117" height="117" rx="12"></rect>
                        <filter x="-6.0%" y="-4.3%" width="112.0%" height="112.0%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="dice_4" transform="translate(4.000000, 2.000000)">
                            <g id="Rectangle">
                                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                                <use fill="#FCDC80" fill-rule="evenodd" xlinkHref="#path-1"></use>
                                <rect stroke="#979797" stroke-width="1" x="0.5" y="0.5" width="116" height="116" rx="12"></rect>
                            </g>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="27.5" cy="27.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="89.5" cy="27.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="27.5" cy="89.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="89.5" cy="89.5" r="12.5"></circle>
                        </g>
                    </g>
                </svg>
            )
            break;
        case 5:
            diceSvg = (
                <svg viewBox="0 0 125 125" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                    <defs>
                        <rect id="path-1" x="0" y="0" width="117" height="117" rx="12"></rect>
                        <filter x="-6.0%" y="-4.3%" width="112.0%" height="112.0%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="dice_5" transform="translate(4.000000, 2.000000)">
                            <g id="Rectangle">
                                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                                <use fill="#FCDC80" fill-rule="evenodd" xlinkHref="#path-1"></use>
                                <rect stroke="#979797" stroke-width="1" x="0.5" y="0.5" width="116" height="116" rx="12"></rect>
                            </g>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="27.5" cy="27.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="58.5" cy="58.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="89.5" cy="27.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="27.5" cy="89.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="89.5" cy="89.5" r="12.5"></circle>
                        </g>
                    </g>
                </svg>
            )
            break;
        case 6:
            diceSvg = (
                <svg viewBox="0 0 125 125" version="1.1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                    <defs>
                        <rect id="path-1" x="0" y="0" width="117" height="117" rx="12"></rect>
                        <filter x="-6.0%" y="-4.3%" width="112.0%" height="112.0%" filterUnits="objectBoundingBox" id="filter-2">
                            <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                        </filter>
                    </defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="dice_6" transform="translate(4.000000, 2.000000)">
                            <g id="Rectangle">
                                <use fill="black" fill-opacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                                <use fill="#FCDC80" fill-rule="evenodd" xlinkHref="#path-1"></use>
                                <rect stroke="#979797" stroke-width="1" x="0.5" y="0.5" width="116" height="116" rx="12"></rect>
                            </g>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="25.5" cy="25.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="25.5" cy="58.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="25.5" cy="91.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="91.5" cy="25.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="91.5" cy="58.5" r="12.5"></circle>
                            <circle id="Oval" stroke="#979797" fill="#FFFFFF" cx="91.5" cy="91.5" r="12.5"></circle>
                        </g>
                    </g>
                </svg>
            )
            break;
        default:
            diceSvg = null;
            break;
    };

    return (
        <div className="dice-wrapper">
            { diceSvg }
        </div>
    )
};

export default Dice;
