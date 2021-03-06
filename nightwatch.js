/* globals module */

module.exports = {
  src_folders: ['src/test/browser/index.js'],
  output_folder: 'reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: '',
  globals_path: '',

  selenium: {
    start_process: true,
    server_path:
      '~/Library/Caches/Homebrew/selenium-server-standalone-3.7.0.jar',
    log_path: '',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': '/usr/local/bin/chromedriver',
    },
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: false,
      username: '${SAUCE_USERNAME}',
      access_key: '${SAUCE_ACCESS_KEY}',
      screenshots: {
        enabled: false,
        path: '',
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },

    safari: {
      desiredCapabilities: {
        browserName: 'safari',
      },
    },

    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
      },
    },
  },
};
