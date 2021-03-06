export class StorageService {

  constructor() { }

  getApiUrl() {
    return   'http://34.97.225.164:5013';
  }

  setSession(key: string, obj: any) {
    sessionStorage.setItem(key, JSON.stringify(obj))
  }

  getSession(key: string) {
    const obj = sessionStorage.getItem(key);
    return obj ? JSON.parse(obj) : null;
  }

  sessionDeleteAll() {
    sessionStorage.clear();
  }

  sessionDeleteByKey(key: string) {
    sessionStorage.removeItem(key);
  }

  setLocal(key: string, obj: any) {
    localStorage.setItem(key, JSON.stringify(obj));
  }

  getLocal(key: string) {
    const obj = localStorage.getItem(key);
    return obj ? JSON.parse(obj) : null;
  }

  localDeleteAll() {
    localStorage.clear();
  }

  localDeleteByKey(key: string) {
    localStorage.removeItem(key);
  }
} 