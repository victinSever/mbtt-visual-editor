import React from "react";
// import { showPictureValue } from "../../pages/home/slice";
import { useDispatch } from "react-redux";
import { changeOptions } from '../../pages/home/slice'
import './picture.css'
import {
    Form,
    Button,
    Select,
    Input,
    Checkbox
} from 'antd';
// import ConsoleStyle from '../console_style/console_style'
import { useRef } from 'react';
const App_picture = (data) => {
    let options = { ...data.options }
    const dispatch = useDispatch();
    const fileInputEl = useRef(null);
    function choosefile(file) {
        let url = null;
        // 需要针对不同的浏览器执行不同的 js 函数
        if (window.createObjectURL !== undefined) { // basic
            url = window.createObjectURL(file);
        }
        else if (window.URL !== undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file);
        }
        else if (window.webkitURL !== undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file);
        }
        return url
    }
    return (
        <div className="pictureInput">
            <Form layout="vertical"
                style={{
                    fontWeight: 700,
                    fontFamily: '微软雅黑',
                }}
            // type={'file'} id={'file'} ref={fileInputEl} hidden onChange={() => {
            //     let url = choosefile(document.getElementById('file').files[0])
            //     options.src = url
            //     dispatch(changeOptions(options))
            // }
            // }
            >
                <Form.Item label="标题">
                    <Input
                        placeholder="请输入标题"
                        className='title'
                        onChange={(e) => {
                            options.title = e.target.value; console.log(options);
                            dispatch(changeOptions(options))
                        }} />
                </Form.Item>
                <Form.Item label="提示">
                    <Input
                        placeholder="请输入提示"
                        className='tips'
                        onChange={(e) => {
                            options.tips = e.target.value; console.log(options);
                            dispatch(changeOptions(options))
                        }} />
                </Form.Item>
                <Form.Item label="默认内容">
                    <input type={'file'} id={'file'} ref={fileInputEl} hidden onChange={() => {
                        let url = choosefile(document.getElementById('file').files[0])
                        options.src = url
                        dispatch(changeOptions(options))
                    }
                    } />
                    <Button type="dashed" onClick={() => fileInputEl.current.click()} className="picture_button">上传图片</Button>
                </Form.Item>

            </Form>

            <Form.Item
             style={{
                fontFamily: '微软雅黑',
            }}
            >
                <Checkbox
                    onChange={(e) => {
                        options.checked = e.target.checked; console.log(options);
                        dispatch(changeOptions(options))
                    }}
                >
                    这是个必填项
                </Checkbox>
            </Form.Item>
        </div>
    )
}
export default App_picture