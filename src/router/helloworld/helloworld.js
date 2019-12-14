/**
 * hello world
 *
 * @param {*} app
 */
export default (app) => {
  app.post('/createproject', (req, res) => {
    const requestData = Object.assign(req.query, req.body);
    const name = requestData.name;
    const projectID = requestData.projectID;
    const width = requestData.width;
    const height = requestData.height;
    const showType = requestData.showType;
    const background_color = requestData.background_color ? requestData.background_color : '';
    const background_imgURL = requestData.background_imgURL ? requestData.background_imgURL : '';
    const owner = requestData.owner;
    const description = requestData.description;
    const defaultReadMe = `# ${name} \r ---`;
    const defaultChangeLog = `| 人员 | 事件 | 时间 | 内容 | 备注 | \r | :------: | :------: | :------: | :------: | :------: | \r | ${owner} | 创建 | ${moment(new Date()).format('YYYY-MM-DD HH:mm:ss')} | 创建项目 ||`;
    createProjectHandle(name, projectID, width, height, showType, background_color, background_imgURL, owner, defaultReadMe, defaultChangeLog, background_imgURL, description).then((d) => {
      res.send(d);
    }).catch((d) => {
      res.send(d);
    })
  })
}
