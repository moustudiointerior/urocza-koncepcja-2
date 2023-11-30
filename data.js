var APP_DATA = {
  "scenes": [
    {
      "id": "0-kuchnia",
      "name": "kuchnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.954027399265682,
          "pitch": -0.10011035595667295,
          "rotation": 0,
          "target": "1-azienka"
        },
        {
          "yaw": 1.2407050288240384,
          "pitch": -0.00362759132167767,
          "rotation": 0,
          "target": "5-hol"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-azienka",
      "name": "łazienka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5053545723576995,
          "pitch": 0.09258135644145327,
          "rotation": 0,
          "target": "0-kuchnia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ganek",
      "name": "ganek",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9557654015383754,
          "pitch": -0.003382180714963212,
          "rotation": 0,
          "target": "4-korytarz-pralka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-gabinet",
      "name": "gabinet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8638049099262437,
          "pitch": 0.06140938713425825,
          "rotation": 0,
          "target": "5-hol"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-korytarz-pralka",
      "name": "korytarz pralka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8818268469901582,
          "pitch": 0.00592304580289138,
          "rotation": 0,
          "target": "2-ganek"
        },
        {
          "yaw": -0.7828386325701349,
          "pitch": 0.05370275557606341,
          "rotation": 0,
          "target": "5-hol"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-hol",
      "name": "hol",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.04709671714269,
          "pitch": 0.004504960182767803,
          "rotation": 0,
          "target": "3-gabinet"
        },
        {
          "yaw": -0.4638155272948392,
          "pitch": 0.02707601172482299,
          "rotation": 0,
          "target": "2-ganek"
        },
        {
          "yaw": 3.008902345509788,
          "pitch": -0.01765353134596026,
          "rotation": 0,
          "target": "0-kuchnia"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
