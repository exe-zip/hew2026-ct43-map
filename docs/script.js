// --- 設定データエリア ---

// 1. 机の配置データ (ここだけは今まで通り手動で配置)
const deskPositions = [
    { id: 1, top: 22, left: 8 },
    { id: 2, top: 22, left: 12 },
    { id: 3, top: 22, left: 16 },
    { id: 4, top: 22, left: 20 },
    { id: 5, top: 22, left: 24 },
    { id: 6, top: 22, left: 28 },
    { id: 7, top: 22, left: 32 },
    { id: 8, top: 22, left: 36 },
    { id: 9, top: 22, left: 40 },
    { id: 10, top: 22, left: 44 },
    { id: 11, top: 22, left: 56 },
    { id: 12, top: 22, left: 60 },
    { id: 13, top: 22, left: 64 },
    { id: 14, top: 22, left: 68 },
    { id: 15, top: 22, left: 72 },
    { id: 16, top: 22, left: 76 },
    { id: 17, top: 22, left: 80 },
    { id: 18, top: 22, left: 84 },
    { id: 19, top: 22, left: 88 },
    { id: 20, top: 22, left: 92 },
    { id: 21, top: 34, left: 16 },
    { id: 22, top: 40, left: 14 },
    { id: 23, top: 40, left: 18 },
    { id: 24, top: 46, left: 14 },
    { id: 25, top: 46, left: 18 },
    { id: 26, top: 52, left: 11 },
    { id: 27, top: 52, left: 15 },
    { id: 28, top: 58, left: 11 },
    { id: 29, top: 58, left: 15 },
    { id: 30, top: 34, left: 29 },
    { id: 31, top: 40, left: 27 },
    { id: 32, top: 40, left: 31 },
    { id: 33, top: 46, left: 27 },
    { id: 34, top: 46, left: 31 },
    { id: 35, top: 52, left: 24 },
    { id: 36, top: 52, left: 28 },
    { id: 37, top: 58, left: 24 },
    { id: 38, top: 58, left: 28 },
    { id: 39, top: 64, left: 21 },
    { id: 40, top: 64, left: 25 },
    { id: 41, top: 70, left: 21 },
    { id: 42, top: 70, left: 25 },
    { id: 43, top: 34, left: 42 },
    { id: 44, top: 40, left: 40 },
    { id: 45, top: 40, left: 44 },
    { id: 46, top: 46, left: 40 },
    { id: 47, top: 46, left: 44 },
    { id: 48, top: 52, left: 37 },
    { id: 49, top: 52, left: 41 },
    { id: 50, top: 58, left: 37 },
    { id: 51, top: 58, left: 41 },
    { id: 52, top: 64, left: 34 },
    { id: 53, top: 64, left: 38 },
    { id: 54, top: 70, left: 34 },
    { id: 55, top: 70, left: 38 },
    { id: 56, top: 34, left: 58 },
    { id: 57, top: 40, left: 56 },
    { id: 58, top: 40, left: 60 },
    { id: 59, top: 46, left: 56 },
    { id: 60, top: 46, left: 60 },
    { id: 61, top: 52, left: 59 },
    { id: 62, top: 52, left: 63 },
    { id: 63, top: 58, left: 59 },
    { id: 64, top: 58, left: 63 },
    { id: 65, top: 64, left: 62 },
    { id: 66, top: 64, left: 66 },
    { id: 67, top: 70, left: 62 },
    { id: 68, top: 70, left: 66 },
    { id: 69, top: 34, left: 71 },
    { id: 70, top: 40, left: 69 },
    { id: 71, top: 40, left: 73 },
    { id: 72, top: 46, left: 69 },
    { id: 73, top: 46, left: 73 },
    { id: 74, top: 52, left: 72 },
    { id: 75, top: 52, left: 76 },
    { id: 76, top: 58, left: 72 },
    { id: 77, top: 58, left: 76 },
    { id: 78, top: 64, left: 75 },
    { id: 79, top: 64, left: 79 },
    { id: 80, top: 70, left: 75 },
    { id: 81, top: 70, left: 79 },
    { id: 82, top: 34, left: 84 },
    { id: 83, top: 40, left: 82 },
    { id: 84, top: 40, left: 86 },
    { id: 85, top: 46, left: 82 },
    { id: 86, top: 46, left: 86 },
    { id: 87, top: 52, left: 85 },
    { id: 88, top: 52, left: 89 },
    { id: 89, top: 58, left: 85 },
    { id: 90, top: 58, left: 89 },
    { id: 91, top: 28, left: 96 },
    { id: 92, top: 34, left: 96 },
    { id: 93, top: 40, left: 96 },
    { id: 94, top: 46, left: 96 },
    { id: 95, top: 52, left: 96 },
    { id: 96, top: 34, left: 4 },
    { id: 97, top: 40, left: 4 },
    { id: 98, top: 46, left: 4 },
    { id: 99, top: 52, left: 4 },
    { id: 100, top: 58, left: 4 },
    { id: 101, top: 64, left: 4 },
];

// 2. 学生データ（初期値は空にしておき、APIから取得する）
let students = { AM: {}, PM: {} };

// --- API設定エリア ---
const GAS_API_URL = "https://script.google.com/macros/s/AKfycbyCZf_N1LbHuEm799OQXds_nhTIUuaFI3nR6R-dmrbifEEeFu5c1GIcFHAIV3Wba9MG/exec";
const DEBUG_MODE = false; 

// --- プログラム処理エリア ---

let currentShift = 'AM';

// ★新機能：一番最初に実行され、データを読み込む関数
async function init() {
    try {
        // "?type=students" を付けて、学生データを要求する
        const response = await fetch(GAS_API_URL + "?type=students");
        students = await response.json();
        
        // データの読み込みが終わってからマップを描画する
        renderMap();
        
        // その後、5秒ごとにステータス（busy/free）を更新する処理をスタート
        setInterval(updateStatus, 5000);
        
    } catch (e) {
        console.error("学生データの読み込みに失敗しました:", e);
        alert("データの読み込みに失敗しました。再読み込みしてください。");
    }
}

function renderMap() {
    const container = document.getElementById('mapContainer');
    
    const existingDesks = document.querySelectorAll('.desk');
    existingDesks.forEach(el => el.remove());

    const currentStudents = students[currentShift];

    deskPositions.forEach(pos => {
        const student = currentStudents[pos.id];
        if (student) {
            const desk = document.createElement('div');
            desk.className = 'desk';
            desk.dataset.id = pos.id; 
            
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

    updateStatus();
}

async function updateStatus() {
    if (DEBUG_MODE) {
        // ... (ダミー処理は省略せず残してOKです) ...
        return;
    }

    try {
        if (!GAS_API_URL || GAS_API_URL.includes("ここに")) return;

        // "?type=status" を付けて、空き状況を要求する
        const response = await fetch(GAS_API_URL + "?type=status");
        const data = await response.json(); 

        Object.keys(data).forEach(id => {
            const status = data[id];
            const desk = document.querySelector(`.desk[data-id="${id}"]`);
            if (desk) {
                if (status === 'busy') {
                    desk.classList.add('busy');
                } else {
                    desk.classList.remove('busy');
                }
            }
        });

    } catch (e) {
        console.error("ステータス取得エラー:", e);
    }
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

// 最後にinitを実行してスタート
init();