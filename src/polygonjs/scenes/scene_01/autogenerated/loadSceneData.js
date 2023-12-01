import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1701449419145",
  root: "1701436924230",
  nodes: {
    geo1: "1701449419145",
    "geo1/MAT": "1701429782210",
    "geo1/MAT/meshStandardBuilder_DOORS": "1701429782210",
    lights: "1701429782210",
    cameras: "1701429782210",
    "cameras/cameraControls1": "1701442011201",
    "cameras/cameraControls2": "1701429782210",
  },
  shaders: {
    "/geo1/MAT/meshStandardBuilder_DOORS": {
      vertex: "1701429782210",
      fragment: "1701429782210",
      "customDepthMaterial.vertex": "1701429782210",
      "customDepthMaterial.fragment": "1701429782210",
      "customDistanceMaterial.vertex": "1701429782210",
      "customDistanceMaterial.fragment": "1701429782210",
      "customDepthDOFMaterial.vertex": "1701429782210",
      "customDepthDOFMaterial.fragment": "1701429782210",
    },
  },
  jsFunctionBodies: {},
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
