/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function Page() {
    return (
        <div className='bg-base-200 ml-3 mr-3'>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text font-semibold">On</span>
                    <input type="radio" name="radio-10" className="radio checked:checkbox-info" />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text font-semibold">Off</span>
                    <input type="radio" name="radio-10" className="radio checked:checkbox-info" />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <div className='flex flex-col'>
                        <span className="label-text font-semibold">Use system settings</span>
                        <span className='font-extralight text-xs text-left mr-20'>We'll adjunst your apparance base on your device's system settings</span>
                    </div>
                    <input type="radio" name="radio-10" className="radio checked:checkbox-info" />
                </label>
            </div>
        </div>
    );
};
