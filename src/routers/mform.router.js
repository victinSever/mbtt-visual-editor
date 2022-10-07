import Router from "koa-router";
import { addDataCon, addMFormCon,deleteDataCon,deleteMFormCon,findAllMFormCon, findOneCon } from "../controller/mform.controller.js";
var router = new Router();

// 路由路径前缀设置
router.prefix("/mform");

router.post('/addMForm', addMFormCon)
router.get('/findAll', findAllMFormCon)
router.get('/findOne', findOneCon)
router.post('/add/data', addDataCon)
router.post('deleteMForm', deleteMFormCon)
router.post('deleteData', deleteDataCon)


export default router