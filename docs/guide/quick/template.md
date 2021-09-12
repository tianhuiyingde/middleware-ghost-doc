# 模板环境

`IVOD`的所有服务接口都需要经过认证方可调用，主要分为两种：

- `access_token`认证
- `MtsHlsUriToken`一次性 token 认证

其中`access_token`适用于除[密钥获取]()接口外的所有接口，`MtsHlsUriToken`仅适用于[密钥获取]()接口

## access_token

### 基本信息

|     名称     | 值                    | 说明 |
| :----------: | --------------------- | ---- |
|     path     | /vod-rest/oauth/token |      |
|    method    | post                  |      |
| content-type | application/json      |      |

### 请求参数

|       参数名       | 位置         | 说明                               |
| :----------------: | ------------ | ---------------------------------- |
|     grant_type     | query params | 授权类型：client_credentials       |
|     client_id      | query params | 客户端 ID，各业务线分配的专用 ID   |
| client_secret-type | query params | 客户端密钥，各业务线分配的专用密钥 |

### 接口响应

```json
{
  "access_token": "48e68a94-7c6d-406d-8f87-ccb6207e7548",
  "token_type": "bearer",
  "expires_in": 7199,
  "scope": "client"
}
```

:::tip 说明
token 采用 oauth2 的形式生成，过期后请重新获取
后续所有请求均需要在**header**中的**Authorization**传递该 token

另外，强烈建议该 token 由服务端获取，不建议客户端直接请求
:::

## MtsHlsUriToken

该 token 主要用于获取密钥时的教研，需要拼接到`m3u8`URI 后，形如`MtsHlsUriToken=xxx`，参数名必须为`MtsHlsUriToken`
此时，CDN 会将该 token 重写到`keyUri`上
:::tip 说明
部分播放器可能会由于`m3u8`地址的动态变化，导致清晰度切换失效，此时可手动将 token 拼接到`keyUri`上
:::

### 基本信息

|     名称     | 值                    | 说明 |
| :----------: | --------------------- | ---- |
|     path     | /vod-kms/vod/hlsToken |      |
|    method    | get                   |      |
| content-type | application/json      |      |

### 请求参数

无

### 接口响应

```json
{
  "code": 200,
  "msg": "Success",
  "data": "OTE4YzU1N2EtMmZkZi00NDlmLWFkYTgtMTI3ZjI1NjVjNDZl"
}
```
