// API 配置
const API_BASE_URL = 'http://localhost:3000';

// API 服务类
class ApiService {
  // 用户登录
  static async login(identifier, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ identifier, password })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        return { success: true, data };
      } else {
        return { success: false, error: data.message || '登录失败' };
      }
    } catch (error) {
      console.error('登录请求失败:', error);
      return { success: false, error: '网络错误，请稍后重试' };
    }
  }
  
  // 用户注册
  static async register(username, email, password, role = 'user') {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password, role })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        return { success: true, data };
      } else {
        return { success: false, error: data.message || '注册失败' };
      }
    } catch (error) {
      console.error('注册请求失败:', error);
      return { success: false, error: '网络错误，请稍后重试' };
    }
  }
  
  // 根据用户ID获取用户信息
  static async getUserById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (response.ok) {
        return { success: true, data };
      } else {
        return { success: false, error: data.message || '获取用户信息失败' };
      }
    } catch (error) {
      console.error('获取用户信息失败:', error);
      return { success: false, error: '网络错误，请稍后重试' };
    }
  }
  
  // 更新用户信息
  static async updateUser(id, userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        return { success: true, data };
      } else {
        return { success: false, error: data.message || '更新用户信息失败' };
      }
    } catch (error) {
      console.error('更新用户信息失败:', error);
      return { success: false, error: '网络错误，请稍后重试' };
    }
  }
  
  // 修改用户密码
  static async changePassword(id, oldPassword, newPassword) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/${id}/password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ oldPassword, newPassword })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        return { success: true, data };
      } else {
        return { success: false, error: data.message || '修改密码失败' };
      }
    } catch (error) {
      console.error('修改密码失败:', error);
      return { success: false, error: '网络错误，请稍后重试' };
    }
  }
  
  // 用户注销账户
  static async deleteUser(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (response.ok) {
        return { success: true, data };
      } else {
        return { success: false, error: data.message || '注销账户失败' };
      }
    } catch (error) {
      console.error('注销账户失败:', error);
      return { success: false, error: '网络错误，请稍后重试' };
    }
  }
}

// 将 ApiService 挂载到全局 window 对象上
window.ApiService = ApiService;