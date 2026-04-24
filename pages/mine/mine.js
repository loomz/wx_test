Page({
  data: {
    // 页面数据
  },

  // 分享到微信
  shareToWechat: function() {
    wx.showToast({
      title: '分享到微信',
      icon: 'success',
      duration: 1500
    });
  },

  // 分享到朋友圈
  shareToMoments: function() {
    wx.showToast({
      title: '分享到朋友圈',
      icon: 'success',
      duration: 1500
    });
  },

  // 分享到QQ好友
  shareToQQ: function() {
    wx.showToast({
      title: '分享到QQ好友',
      icon: 'success',
      duration: 1500
    });
  },

  // 复制链接
  copyLink: function() {
    wx.setClipboardData({
      data: 'https://ai-space-design.com',
      success: function() {
        wx.showToast({
          title: '链接已复制',
          icon: 'success',
          duration: 1500
        });
      }
    });
  },

  // 跳转到生成记录
  goToHistory: function() {
    wx.showToast({
      title: '跳转到生成记录',
      icon: 'success',
      duration: 1500
    });
  },

  // 跳转到我的收藏
  goToCollection: function() {
    wx.showToast({
      title: '跳转到我的收藏',
      icon: 'success',
      duration: 1500
    });
  },

  // 跳转到灵感中心
  goToInspirationCenter: function() {
    wx.showToast({
      title: '跳转到灵感中心',
      icon: 'success',
      duration: 1500
    });
  },

  // 跳转到版本规划
  goToVersionPlan: function() {
    wx.showToast({
      title: '跳转到版本规划',
      icon: 'success',
      duration: 1500
    });
  },

  // 联系客服
  contactService: function() {
    wx.showToast({
      title: '联系客服',
      icon: 'success',
      duration: 1500
    });
  },

  // 跳转到设置
  goToSettings: function() {
    wx.showToast({
      title: '跳转到设置',
      icon: 'success',
      duration: 1500
    });
  },

  // 退出登录
  logout: function() {
    wx.showModal({
      title: '退出登录',
      content: '确定要退出登录吗？',
      success: function(res) {
        if (res.confirm) {
          wx.showToast({
            title: '已退出登录',
            icon: 'success',
            duration: 1500
          });
        }
      }
    });
  }
});