module.exports = {
  // eslint
  devServer: {
    overlay: {
      //   warings: false,
      //   errors: false,
    },

    proxy: {
      "/api": {
        target: "hhttp://v.juhe.cn/",
        changeOrigin: true,
        ws: true,
        secure: false, //https 检查
        pathRewrite: {
          "^/api/": "",
        },
      },
    },
  },

  //   lintOnSava: false,
};
