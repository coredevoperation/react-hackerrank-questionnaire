import { useEffect, useRef, useState } from 'react';
import './components.css'

const Question = (props) => {
    const [aIndex, setAIndex] = useState(0);
    // const [aOptions, setAOptions] = useState([{ checked: false, value: '' }])

    // function convertToOrderedNumber(number) {
    //     if (typeof number !== 'number' || isNaN(number) || !Number.isInteger(number) || number < 0) {
    //         throw new Error('Input must be a positive integer greater than or equal to 1.');
    //     }

    //     const units = ['', 'First', 'Second', 'Third'];

    //     if (number < 4)
    //         return units[number];

    //     const numString = (number).toString();

    //     const lastDigit = parseInt(numString[numString.length - 1]);
    //     const lastTwoDigits = parseInt(numString.slice(-2));

    //     if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    //         return number + 'th';
    //     }

    //     return number + getOrdinalSuffix(lastDigit);
    // }

    // function getOrdinalSuffix(digit) {
    //     const suffixes = ['th', 'st', 'nd', 'rd'];
    //     const suffixIndex = digit > 0 && digit < 4 ? digit : 0;
    //     return suffixes[suffixIndex];
    // }

    // function removeOption(index) {
    //     let newOptions = [...aOptions];
    //     newOptions.splice(index, 1);
    //     setAOptions(newOptions);
    // }

    const onRemoveQuestion = () => {
        const { index, setQuestions } = props;
        setQuestions(p => {
            let newQuestions = [...p];
            newQuestions.splice(index, 1);
            return newQuestions;
        });
    }

    const onQuestionChanged = (e) => {
        const { index, setQuestions } = props;
        setQuestions(p => {
            let newQuestions = [...p];
            newQuestions[index].q = e.target.value;
            return newQuestions;
        })
    }

    const onAnswerChanged = (e) => {
        const { index, setQuestions } = props;
        setQuestions(p => {
            let newQuestions = [...p];
            newQuestions[index].a = e.target.value;
            return newQuestions;
        })
    }

    const onMove = (direction) => {
        const { data, index, setQuestions, count } = props;
        let newIndex = (index + direction + count) % count;
        setQuestions(p => {
            let newQuestions = [...p];
            newQuestions.splice(index, 1);
            newQuestions.splice(newIndex, 0, data);
            return newQuestions;
        })
    }

    return (
        <div className='question-card'>
            <div id='question'>
                <p className='question-label'>Question</p>
                <input className='question-input' type='text' placeholder='What do you want to ask?' value={props.data.q} onChange={(e) => onQuestionChanged(e)} />
            </div>
            <hr id="divider" />
            <div id='answer'>
                <p className='question-label'>Answer</p>
                <select className='ans-options' name="ans-options" id="ans-option" onChange={(e) => { setAIndex(e.target.selectedIndex) }}>
                    <option value="short-answer">Short Answer</option>
                    {/* <option value="paragraph">Paragraph</option>
                    <option value="checkboxes">Checkboxes</option>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="dropdown">Dropdown</option> */}
                </select>
                {
                    // aIndex < 1 ?
                    <input className='answer-short-input' type='text' placeholder='Short answer text' value={props.data.a} onChange={(e) => onAnswerChanged(e)} /> //:
                    // aIndex < 2 ?
                    //     <textarea className='answer-long-input' type='text' placeholder='Long answer text' multiple /> :
                    //     aOptions.map((option, index) => {
                    //         return <div key={index} className='ans-option'>
                    //             {aIndex >= 4 ? <div className='option-check'>{index + 1}.</div> :
                    //             <input className='option-check' type='checkbox' name='group' id={index} /> }
                    //             <input className='option-label' type='text' placeholder={convertToOrderedNumber(index + 1) + ' Option'} />
                    //             <button className='btn-remove-option' onClick={() => { removeOption(index) }}>
                    //                 <img src='assets/icon/cross.svg' />
                    //             </button>

                    //         </div>
                    //     })
                }
            </div>
            {/* <div id='add-option'>
                <button className='btn-add-option' onClick={() => { setAOptions(p => p.concat({ checked: false, value: '' })) }}>+ ADD OPTION</button>
            </div> */}
            {
                props.count > 1 ?
                    <div id='question-actions'>
                        <div>
                            <p className='question-index'>{parseInt(props.index) + 1} of {props.count}</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', flexGrow: 1, gap: '10px' }}>
                            <button className='icon-btn'>
                                <img src='assets/icon/up.svg' onClick={() => onMove(-1)} />
                            </button>
                            <button className='icon-btn'>
                                <img src='assets/icon/down.svg' onClick={() => onMove(1)} />
                            </button>
                            <button className='icon-btn' onClick={onRemoveQuestion}>
                                <img src='assets/icon/delete.svg' />
                            </button>
                        </div>
                    </div> : <></>
            }
        </div>
    )
}

export default Question;