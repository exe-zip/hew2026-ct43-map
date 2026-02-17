// --- 設定データエリア ---

// 1. 机の配置データ (top: 上からの%, left: 左からの%)
const deskPositions = [
    { id: 1, top: 20, left: 20 },
    { id: 2, top: 20, left: 50 },
    { id: 3, top: 20, left: 80 },
    { id: 4, top: 50, left: 30 },
    { id: 5, top: 50, left: 70 },
    { id: 6, top: 80, left: 50 }
];

// 2. 学生データ (前半: AM / 後半: PM)
const students = {
    AM: {
        1: { name: "田中 太郎", img: "board/CT43-001.jpg", desc: "てすといちだにょ～ん" },
        2: { name: "佐藤 花子", img: "board/CT43-002.jpg", desc: "モデラーになりたかったなにか" },
        3: { name: "鈴木 一郎", img: "board/CT43-003.jpg", desc: "デカいケツで解決" },
        4: { name: "高橋 次郎", img: "board/CT43-004.jpg", desc: "テクニカルアート検証" },
        5: { name: "伊藤 三郎", img: "board/CT43-005.jpg", desc: "VRコンテンツ" },
        6: { name: "渡辺 四郎", img: "board/CT43-006.jpg", desc: "2Dコンセプトアート" }
    },
    PM: {
        1: { name: "山本 五郎", img: "board/CT43-007.jpg", desc: "UIデザイン研究" },
        2: { name: "中村 六郎", img: "board/CT43-008.jpg", desc: "シェーダー開発" },
        3: { name: "小林 七郎", img: "board/CT43-009.jpg", desc: "リギング・モーション" },
        4: { name: "加藤 八郎", img: "board/CT43-010.jpg", desc: "AI対戦ゲーム" },
        5: { name: "吉田 九郎", img: "board/CT43-011.jpg", desc: "サウンドプログラミング" },
        6: { name: "佐々木 十郎", img: "board/CT43-012.jpg", desc: "オリジナル短編アニメ" }
    }
};

// --- プログラム処理エリア ---

let currentShift = 'AM';

function renderMap() {
    const container = document.getElementById('mapContainer');
    
    // 既存の机ボタンを削除
    const existingDesks = document.querySelectorAll('.desk');
    existingDesks.forEach(el => el.remove());

    const currentStudents = students[currentShift];

    deskPositions.forEach(pos => {
        const student = currentStudents[pos.id];
        if (student) {
            const desk = document.createElement('div');
            desk.className = 'desk';
            desk.style.top = pos.top + '%';
            desk.style.left = pos.left + '%';
            desk.innerText = student.name;
            desk.onclick = (e) => {
                e.stopPropagation();
                openModal(student);
            };
            container.appendChild(desk);
        }
    });

    document.getElementById('btnAM').className = currentShift === 'AM' ? 'active' : '';
    document.getElementById('btnPM').className = currentShift === 'PM' ? 'active' : '';
}

function openModal(student) {
    document.getElementById('modalImg').src = student.img;
    document.getElementById('modalName').innerText = student.name;
    document.getElementById('modalDesc').innerText = student.desc;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function switchShift(shift) {
    currentShift = shift;
    renderMap();
}

// 初期実行
renderMap();