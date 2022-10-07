import {MForm} from "../utils/database.js";

/**
 * 添加一个模板
 */
async function addMForm(tablesParam) {
  console.log(tablesParam.rules)
  // validate]
  if(JSON.stringify(tablesParam.rules) === '{}'){
    throw 'rules can not be null or {} (empty object)';
  }else if (await MForm.findOne({ id: tablesParam.id })) {
    throw 'ID "' + tablesParam.id + '" is already taken';
  }

  const form = new MForm(tablesParam);
  // save user
  await form.save();
  return '{"code": 200, msg: "success"}'
}

/**
 * 
 * @returns 所有数据
 */
async function finAllMForm(){
  const result = await MForm.find()
  return result
}

/**
 * 根据参数查找
 * @param {} params 
 * @returns 
 */
async function findOne(params){
  const result = await MForm.findOne(params)
  return result
}

/**
 * 向指定id的模板中添加数据
 * @param {} id mForm id 
 * @param {*} params 
 */
async function addData(id,params){
  let date=new Date();
  params.time= date;
  return await MForm.updateOne({id:id},{$addToSet:{data:params}});
}

async function deleteMForm(param){
  return await MForm.deleteOne(param)
}

async function deleteData(id, params){
  return await Journey.updateOne({id:id},
    {$pull:{data:params}})
}

export { addMForm, finAllMForm, findOne, addData, deleteMForm, deleteData };
