import { addMForm, finAllMForm, addData, findOne, deleteData } from "../services/mform.service.js";

/**
 * 添加一个模板
 * @param {*} ctx 
 */
const addMFormCon = async (ctx) => {
  console.log(ctx.request.body);
  try {
    const result = await addMForm(ctx.request.body);
    ctx.body = result;
  } catch (e) {
    ctx.body = { error: e };
  }
};

/**
 * 查询所有模板数据
 * @param {*} ctx 
 */
const findAllMFormCon = async (ctx) => {
  try {
    const data = await finAllMForm();
    ctx.body = data;
  } catch (e) {
    ctx.body = { error: e };
  }
};

/**
 * 查询一个模板数据
 * @param {*} ctx 
 */
const findOneCon = async (ctx) => {
  try {
    const data = await findOne(ctx.request.query);
    ctx.body = data;
  } catch (e) {
    ctx.body = { error: e };
  }
};

/**
 * 往指定id的模板添加data（插入一天数据）
 * @param {*} ctx 
 */
const addDataCon = async (ctx) => {
  try {
    const data = await addData(ctx.request.body.id, ctx.request.body.data);
    ctx.body = data;
  } catch (e) {
    ctx.body = { error: e };
  }
};

/**
 * 删除一个模板
 * @param {*} ctx 
 */
const deleteMFormCon =  async (ctx) => {
    try {
      const data = await deleteMForm(ctx.request.body);
      ctx.body = data;
    } catch (e) {
      ctx.body = { error: e };
    }
  };

  /**
 * 删除模板中的data数据
 * {id: '模板的id', data: '数据的id'}
 * @param {*} ctx 
 */
const deleteDataCon =  async (ctx) => {
    try {
      const data = await deleteData(ctx.request.body.id,ctx.request.body.data);
      ctx.body = data;
    } catch (e) {
      ctx.body = { error: e };
    }
  };

export { addMFormCon, findAllMFormCon, addDataCon, findOneCon, deleteMFormCon, deleteDataCon };
