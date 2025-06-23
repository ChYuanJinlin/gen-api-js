## api.config.js 配置项

#### docName

- 类型：string

- 默认值：

- 必填：是

- 说明：

  需要生成在线文档的网站名称

#### docUrl

- 类型：string

- 默认值：

- 必填：是

- 说明：

  生成在线文档url

#### cache

- 类型：boolean

- 默认值：true

- 必填：否

- 说明：

  是否开启缓存

#### typescript

- 类型：boolean

- 默认值：false 

- 必填：否

- 说明：

  生成语言类型，默认会根据文件类型去生成 

#### cacheFileName

- 类型：string

- 默认值：genApi.data.json

- 必填：否

- 说明：

  缓存文件名称

#### puppeteerOptions

- 类型：object

- 默认值：

  ```javascript
  {
    method:'launch',
    run(puppeteer) {
      return {
        headless: true,
        defaultViewport: null,
        args: ["--start-maximized"],
        ignoreDefaultArgs: ["--enable-automation"],
        executablePath: puppeteer.executablePath("chrome"),
        devtools: true,
      };
    }
  ```

- 必填：否

- 说明：

  调用 puppeteer的方法 [参考:https://pptr.nodejs.cn/api/puppeteer.puppeteernode](https://pptr.nodejs.cn/api/puppeteer.puppeteernode),如你需要连接你本地浏览器请[参考这篇文章:https://www.jianshu.com/p/119b1dd599ff](https://www.jianshu.com/p/119b1dd599ff)

  #### method

  - 类型：string

  - 默认值：launch

  - 必填：是

  - 说明：

    puppeteer 函数方法

  #### run

  - 类型：Function
  - return： 根据method 方法 返回相应的配置项

  - 默认值：launch params

  - 必填：是

  - 说明：

    puppeteer 配置项

#### apiFilePath

- 类型：string

- 默认值： api

- 必填：是

- 说明：

  需要生成到接口函数的文件夹

#### getRequestFunctionName

- 类型：function

- 默认值：

- 必填：

- 说明：

  定义生成的接口函数名

  ```javascript

    getRequestFunctionName(apiName, opt, toCamelCase) {

    let funcName = toCamelCase(
      `${opt.method.toLocaleLowerCase()}/${opt.formatPaths.at(-2)}/${opt.formatPaths.at(-1)}`
    );
    return funcName;
  },

  ```

#### importRequestName

- 类型：string
- 默认值："import ajax from '@/utils/request'"
- 必填：是
- 说明：

  导入请求函数

#### requestOpt

- 类型：object
- 默认值：
- 必填：是
- 说明：

  请求函数配置

  ```javascript
  {
   // 函数入参参数 可以函数配置
    paramsName:'',
   // 注释
    annotation:function,
   // 自定义的请求函数
    requestFunc:
  }

  ```

  ##### paramsName

  - 类型：string | function
  - 默认值：data
  - 必填：
  - 说明：
    请求函数的入参模板

    ```javascript
        paramsName(opt):string {

        }

    ```

  ##### annotation

  - 类型：function
  - 默认值：

        @项目名称:

        @菜单名称:

  - 必填：
  - 说明：
    接口函数注释模板

    ```javascript
        annotation(opt):string {
            return
            `
            @xxx:
            @xxx:
            `
        }

    ```

  ##### requestFunc

  - 类型：string|function
  - 默认值：
  - 必填：
  - 说明：

    自定义请求函数模板,你只需要复制这个模板替换对应你项目的函数,就能很轻松的改为你自己的项目的函数模板

    ```javascript
      requestFunc(opt, reqTypeName, resTypeName) {
      return `
     export function ${opt.apiName}(${this.config.typescript ? `${opt.newParamsName}?:${reqTypeName}` : `${opt.newParamsName}`} ) ${this.config.typescript ? `: Promise<${resTypeName}>` : ""}  {
       ${`return request.${this.config.typescript ?`${opt.method}<${resTypeName}>` :`${opt.method}` }({ url: ${opt.path},${!opt.restFul ? ` ${opt.newParamsName}` : `${""}`}})

          `}
      }

    `;
    },
    ```

#### projects

- 类型：Array<object | number | string >
- 默认值：
- 必填：是
- 说明：

  api文档项目配置项,projects如果是一个number数组类型的值，请传当前项目的项目id，将会生成当前项目下的所有接口,如果你想生成某个分类下的接口项，需要传数组对象配置好项目id和分类id即可生成你当前项目某个分类的接口

  #### catIds

  - 类型：Array<number> | Array<[string|number,string|number]>
  - 默认值：
  - 必填：是
  - 说明：

    分类ID,可以设置多个</br>
    配置选项:

    ```
    示例1: 生成你当前这个菜单项的所有接口,你只需要传 catIds:[菜单项的id]
    示例2: 生成你当前这个菜单项范围 catIds:[[菜单项的id,'开始下标-结束下标']] (下标是从1开始)
    示例3: 生成你当前这个菜单项的某一项 catIds:[[菜单项的id,xxx]] (传下标|子菜单id|菜单名称)
    示例4: 生成批量的项 catIds:[[菜单项的id,'xxx xxx']] (传下标|子菜单id|菜单名称)
    示例5: 排除某一项 catIds:[[菜单项的id,'-xxx']] (传下标|子菜单id|菜单名称)
    ```

  #### projectId

  - 类型：number|string
  - 默认值：
  - 必填：是
  - 说明：

    项目的唯一标识。支持多个项目



#### YApi示例:

获取方式：打开项目 -> 点开分类 -> 获取projectId 复制浏览器地址栏project/后面的数字 分类ID获取 复制/api/cat\_ 后面的数字。

![yapi](https://www.freeimg.cn/i/2024/03/30/6608256ba2716.png)




#### ApiFox示例:
获取方式：打开项目 -> 点开分类 -> 获取projectId 复制浏览器地址栏project/后面的数字。
![apifox](https://s1.imagehub.cc/images/2025/04/03/2d385627a8f6b1c5fade9fdca9d2f59f.jpeg)

分类ID获取 点击菜单找到基本信息  目录ID

![apifox](https://s1.imagehub.cc/images/2025/04/03/868c907153ba0f90c4adf64835aeaa55.jpeg)

菜单项ID获取 点击菜单项鼠标移动到接口标题

![apifox](https://s1.imagehub.cc/images/2025/04/03/6193cebb63d5d6fae40d6a72aa367066.jpeg)
