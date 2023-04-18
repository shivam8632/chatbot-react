import React from 'react';

function Copy() {
  return (
    <div className="copy">
        <form action="">
            <div className="input-container">
                <label htmlFor="">Select a Language</label>
                <select name="" id="">
                    <option value="">English</option>
                    <option value="">Arabic</option>
                    <option value="">Hindi</option>
                    <option value="">Spanish</option>
                    <option value="">French</option>
                </select>
            </div>
            <div className="input-container">
                <label htmlFor="">Select Tone</label>
                <select name="" id="">
                    <option value="">Convincing</option>
                    <option value="">Appreciative</option>
                    <option value="">Assertive</option>
                    <option value="">Awestruck</option>
                    <option value="">Candid</option>
                </select>
            </div>
            <div className="input-container">
                <label htmlFor="">Choose Usecase</label>
                <select name="" id="">
                    <option value="">Blog Idea & Outline</option>
                    <option value="">Blog Section Writing</option>
                    <option value="">Brand Name</option>
                    <option value="">Business Idea</option>
                    <option value="">Call to Action</option>
                </select>
            </div>
            <div className="input-container">
                <label htmlFor="">Primary Keyword</label>
                <input type="text" placeholder='AI writing assistant' />
            </div>
            <div className="input-container">
                <label htmlFor="">Number of Variants</label>
                <select name="" id="">
                    <option value="">1 Variant</option>
                    <option value="">2 Variant</option>
                    <option value="">3 Variant</option>
                </select>
            </div>
            <div className="input-container">
                <label htmlFor="">Creativity Level</label>
                <select name="" id="">
                    <option value="">Optimal</option>
                    <option value="">Low</option>
                    <option value="">Mediums</option>
                </select>
            </div>
            <button className='button button-fill'>Start Writing</button>
        </form>
    </div>
  )
}

export default Copy