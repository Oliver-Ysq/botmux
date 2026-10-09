/**
 * 本仓库已在 devDependencies 声明 @types/proxy-from-env；部分共享开发依赖目录未安装该
 * 纯类型包时，仍需让生产构建保持可复现。此声明与 @types/proxy-from-env@1.0.4 的公开
 * `getProxyForUrl` 签名一致，不会改变 proxy-from-env 的任何运行时加载或行为。
 */
declare module 'proxy-from-env' {
  import { Url } from 'node:url';

  /** 根据环境变量和 URL 返回代理地址；未配置代理时返回空字符串。 */
  export function getProxyForUrl(url: string | Url): string;
}
