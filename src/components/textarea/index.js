import React from 'react';
import { useDispatch } from 'react-redux';
import { changeId } from '../../pages/home/slice'
import {
  Form,
  Select,
  Input,
  Radio,
  Checkbox
} from 'antd'
function App(options) {
  const { TextArea } = Input;
  const dispatch = useDispatch()
  return (
    <div className='textareaIndex'>
      <Form layout="vertical">
        <Form.Item label={options.options?.title || "多行文字"}
          required={options.options?.checked}

          onClick={() => {
            console.log(options);
            dispatch(changeId(options.options))
          }}
          style={{
            fontWeight: 700,
            fontFamily: '微软雅黑',
            fontSize: options.options?.fontSize,

          }}>


          <h4
            onClick={() => {
              console.log(options);
              dispatch(changeId(options.options))
            }}
            style={{
              fontSize: '10px',
              fontWeight: 500,
              fontFamily: '微软雅黑',
              color: '#b4b4bc',
            }}>
            {options.options?.tips || ""}
          </h4>
          <div >
            <TextArea rows={5}
              placeholder={options.options?.placeholder || "输入默认内容"} onClick={() => {
                console.log(options);
                dispatch(changeId(options.options))
              }}
              style={{
                height: options.options?.height,
                width: options.options?.width,
              }}>
            </TextArea>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}


export default App;