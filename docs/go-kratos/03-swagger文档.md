---
sidebar_label: 03-swagger文档
sidebar_position: 3
title: 03-swagger文档
---

## Swagger-ui

在上一节我们介绍了 openapi，在运行 `make api` 命令时，我们使用 proto openapi 插件在当前文件生成了 openapi.yaml 文件，我们把该文件导入到 apifox 软件能够得到 api文档，这种方式可以进行 api 文档交付。但是有些同学比较喜欢 swagger-ui，想要在服务上提供 swagger 接口，下面我们来介绍下如何实现：

- 安装

首先安装插件到项目中
```shell
go get -u github.com/go-kratos/swagger-api
```
然后在internal/server/http.go的NewHTTPServer中进行初始化和注册，请尽量将这个路由注册放在最前面，以免匹配不到。

```go
import "github.com/go-kratos/swagger-api/openapiv2"

openAPIhandler := openapiv2.NewHandler()
srv.HandlePrefix("/q/", openAPIhandler)
```
- 使用

浏览器中访问服务的/q/swagger-ui/路径即可打开Swagger UI

![](https://raw.githubusercontent.com/mouuii/picture/master/%E6%88%AA%E5%B1%8F2023-06-27%20%E4%B8%8B%E5%8D%886.13.31.png)


## 修改 user 接口

如上图 swagger-ui 中所示，我们将原来的 helloword 接口改为 user/register, get 方法改成 post 方法， 在 body 中传用户名和年龄，并判断用户名是否重复，如果重复的话，返回错误信息。

![](https://raw.githubusercontent.com/mouuii/picture/master/%E6%88%AA%E5%B1%8F2023-06-27%20%E4%B8%8B%E5%8D%887.22.28.png)

我们看下核心代码：

```go
// internal/biz/user.go 判断用户是否重复，重复的话返回 ErrUserAlreadyExist
// Register creates a User, and returns the new User.
func (uc *UserUsecase) Register(ctx context.Context, u *User) (*User, error) {
	// 查询数据库是否有相同的用户名，如果有返回错误
	uc.log.WithContext(ctx).Infof("Register: %v", u.Name)
	isExist, err := uc.repo.ListByUserName(ctx, u.Name)
	if err != nil {
		return nil, err
	}
	if isExist {
		return nil, ErrUserAlreadyExist
	}
	return uc.repo.Save(ctx, u)
}

```

```go
// internal/data/user.go repo 层操作数据库
func (r *userRepo) Save(ctx context.Context, u *biz.User) (*biz.User, error) {
	_, err := r.data.db.User.Create().SetName(u.Name).SetAge(int(u.Age)).Save(ctx)
	return u, err
}


func (r *userRepo) ListByUserName(ctx context.Context, s string) (bool, error) {
	return r.data.db.User.Query().Where(user.NameEQ(s)).Exist(ctx)
}

```

