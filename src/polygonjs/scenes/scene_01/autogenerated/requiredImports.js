// event
import { CameraOrbitControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls";
import { FirstPersonControlsEventNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/event/FirstPersonControls";
// mat
import { MeshStandardBuilderMatNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandardBuilder";
// obj
import { GeoObjNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo";
// sop
import { BVHSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/BVH";
import { CameraControlsSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/CameraControls";
import { HemisphereLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/HemisphereLight";
import { HierarchySopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hierarchy";
import { InstancedMeshToMeshSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/InstancedMeshToMesh";
import { MaterialSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge";
import { NullSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Null";
import { PerspectiveCameraSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PerspectiveCamera";
import { PolarTransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/PolarTransform";
import { SpotLightSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/SpotLight";
import { TransformSopNode } from "@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform";

export const requiredImports_scene_01 = {
  nodes: [
    CameraOrbitControlsEventNode,
    FirstPersonControlsEventNode,
    MeshStandardBuilderMatNode,
    GeoObjNode,
    BVHSopNode,
    CameraControlsSopNode,
    HemisphereLightSopNode,
    HierarchySopNode,
    InstancedMeshToMeshSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    NullSopNode,
    PerspectiveCameraSopNode,
    PolarTransformSopNode,
    SpotLightSopNode,
    TransformSopNode,
  ],
  operations: [],
  jsFunctions: [],
};
