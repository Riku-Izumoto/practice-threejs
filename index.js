CSS JSResult
EDIT ON
// ページの読み込みを待つ
window.addEventListener("load", init);

function init(){
    // サイズを取得
    const width = window.innerWidth;
    const height = window.innerHeight;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer();
    // 指定した色で背景を塗りつぶす
    renderer.setClearColor(new THREE.Color("rgb(51, 51, 51)"));
  　// canvas領域にレンダラーを追加する　
  　document.body.appendChild(renderer.domElement);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(40, width / height);
  　// カメラの位置をセットする
    camera.position.set(0, 0, 1000);

    // ジオメトリを作成
    const geometry = new THREE.SphereGeometry(300, 30, 30);

    // マテリアルを作成
    const material = new THREE.MeshStandardMaterial({
      // 色を指定
      color: new THREE.Color("rgb(0, 159, 140)"),
      // 見た目をワイヤーフレームにする
      wireframe: true
    });

    // メッシュ(球体)を作成
    const mesh = new THREE.Mesh(geometry, material);

    // 3D空間にメッシュを追加
    scene.add(mesh);

    // 環境光源を作成
    const ambient = new THREE.AmbientLight(0xFFFFFF, 1);
    // シーンに追加
    scene.add(ambient);

    // 平行光源を作成
    const directional = new THREE.DirectionalLight(0xFFFFFF, 1);
    // 平行光源の位置をセットする
    directional.position.set(1, 1, 1);
    // シーンに追加
    scene.add(directional);

    function render(){
      // メッシュを回転させる
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      // 時間経過でrender関数(アニメーション)を更新する
      requestAnimationFrame(render);
      //シーンとカメラをレンダリングして画面を更新する
      renderer.render(scene, camera);
    }

    // render関数を実行する
    render();

  　// 画面のリサイズが行われたらonResize関数を実行する
    window.addEventListener("resize", onResize);

    function onResize() {
      // レンダラーのサイズを調整する
      renderer.setPixelRatio(window.devicePixelRatio);
      // レンダラーのサイズを画面の幅に合わせる
      renderer.setSize(width, height);

      // カメラのアスペクト比を正す
      camera.aspect = width / height;
      // アスペクト比の変更を有効にする
      camera.updateProjectionMatrix();
    }

    // onResize関数を実行
    onResize();
}


Resources1×0.5×0.25×Rerun
