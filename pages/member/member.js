Page({
  data: {
    // 页面数据
  },

  // 购买三年会员
  buyThreeYear: function() {
    wx.showToast({
      title: '购买三年会员',
      icon: 'success',
      duration: 1500
    });
  },

  // 购买年度会员
  buyAnnual: function() {
    wx.showToast({
      title: '购买年度会员',
      icon: 'success',
      duration: 1500
    });
  },

  // 购买月度会员
  buyMonthly: function() {
    wx.showToast({
      title: '购买月度会员',
      icon: 'success',
      duration: 1500
    });
  }
});