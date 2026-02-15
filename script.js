// ترتيب الرتب
const rankOrder = ["قائد","نائب_القائد","ضابط","ضابط_صف","عريف","جندي_أول","جندي","مستجد"];


// عناصر
const container = document.getElementById("armyContainer");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const addBtn = document.getElementById("addBtn");
const stats = document.getElementById("stats");
const emptyState = document.getElementById("emptyState");

const saveDownloadBtn = document.getElementById("saveDownloadBtn");

saveDownloadBtn.addEventListener("click", () => {
  // 1. حفظ تلقائي في localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(armyData));

  // 2. إنشاء ملف JSON وتنزيله
  const dataStr = JSON.stringify(armyData, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "army_data.json"; // اسم الملف
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  alert("تم حفظ البيانات وتنزيل النسخة بنجاح ✅");
});

// Modal
const modalOverlay = document.getElementById("modalOverlay");
const closeModal = document.getElementById("closeModal");
const cancelBtn = document.getElementById("cancelBtn");
const memberForm = document.getElementById("memberForm");
const modalTitle = document.getElementById("modalTitle");

// عناصر Delete Modal
const deleteModal = document.getElementById("deleteModal");
const closeDeleteModal = document.getElementById("closeDeleteModal");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");

let deletingIndex = null;

// فتح Delete Modal
function openDeleteModal(index){
  deletingIndex = index;
  deleteModal.classList.remove("hidden");
}

// إغلاق Delete Modal
function closeDeleteModalFn(){
  deletingIndex = null;
  deleteModal.classList.add("hidden");
}

// أحداث أزرار Delete Modal
closeDeleteModal.addEventListener("click", closeDeleteModalFn);
cancelDelete.addEventListener("click", closeDeleteModalFn);
confirmDelete.addEventListener("click", ()=>{
  if(deletingIndex!==null){
    armyData.splice(deletingIndex,1);
    saveData();
    displayArmy();
    closeDeleteModalFn();
  }
});

// Form fields
const f_name = document.getElementById("f_name");
const f_code = document.getElementById("f_code");
const f_rank = document.getElementById("f_rank");
const f_role = document.getElementById("f_role");
const f_image = document.getElementById("f_image");
const f_certificate = document.getElementById("f_certificate");

// LocalStorage key
const STORAGE_KEY = "army_members_v1";

// بيانات افتراضية
const defaultData = 
[
  {
    "name": "كافح المكافح",
    "rank": "قائد",
    "role": "قائد الجيش",
    "code": "DR7",
    "certificate": true,
    "image": "https://i.postimg.cc/kMW9xdS9/Gx-Got-Sq-W4AAAlw-F.jpg"
  },
  {
    "name": "عقاب المخلوط",
    "code": "P2",
    "rank": "نائب_القائد",
    "role": "نائب القائد",
    "image": "https://i.postimg.cc/6pc1KMv2/Gs3ot9PWQAAGr8r.jpg",
    "certificate": true
  },
  {
    "name": "سايكو دام",
    "code": "P3",
    "rank": "نائب_القائد",
    "role": "نائب القائد",
    "image": "https://i.postimg.cc/5tppcyDw/Gr3o-Ni8WUAA59Fh.jpg",
    "certificate": true
  },
  {
    "name": "يعقوب صلاح",
    "code": "P4",
    "rank": "ضابط",
    "role": "مسؤول نقل المخالفات",
    "image": "",
    "certificate": true
  },
  {
    "name": "متعب الزبيدي",
    "code": "P5",
    "rank": "ضابط",
    "role": "مسؤول ادراج الشكاوي والمخالفات",
    "image": "",
    "certificate": true
  },
  {
    "name": "صقر التميمي",
    "code": "P6",
    "rank": "ضابط",
    "role": "مسؤول ادراج الشكاوي والمخالفات",
    "image": "",
    "certificate": true
  },
  {
    "name": "حربي الزير",
    "code": "P7",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "ناصر المطيري",
    "code": "P8",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "عبد الله أدم",
    "code": "P301",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "فهد سعود",
    "code": "P330",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "عبد الله خطاف",
    "code": "P331",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "مالك شلاش",
    "code": "P332",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "هباد بونشر",
    "code": "P333",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "شجاع التركي",
    "code": "P334",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "حمد التميمي",
    "code": "P335",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "محمد السومة",
    "code": "P336",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "عمر يوسف",
    "code": "P337",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "خالد محمد",
    "code": "P338",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "كاي ولفرد",
    "code": "P339",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "فيصل الثقفي",
    "code": "P340",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "ميد ريكاردو",
    "code": "P341",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "بدر سعود",
    "code": "P342",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "محمد رضا",
    "code": "P343",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "أسامة الشهراني",
    "code": "P344",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "شجاع أحمد",
    "code": "P345",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "خميس عبد الله",
    "code": "P346",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  },
  {
    "name": "عبد الله الجرادي",
    "code": "P348",
    "rank": "ضابط_صف",
    "role": "ضبط الأفراد",
    "image": "",
    "certificate": true
  }
];

let armyData = loadData();
let editingIndex = null;

function saveData(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(armyData)); }
function loadData(){ const raw = localStorage.getItem(STORAGE_KEY); if(!raw) return [...defaultData]; try{ const parsed = JSON.parse(raw); if(!Array.isArray(parsed)) return [...defaultData]; return parsed;}catch{return [...defaultData];} }

function normalize(str){ return (str||"").toString().trim().toLowerCase(); }

// 🔹 تعديل هنا فقط: استخدام شعار الجيش تلقائيًا لأي عضو بدون صورة
function getAvatar(member){
  if(member.image && member.image.trim()!=="") {
    return member.image; // إذا عنده صورة، عرضها
  }
  // إذا ما عنده صورة، عرض شعار الجيش تلقائياً
  return "https://i.postimg.cc/brY4k4b5/0ba743e8-f2e0-4f7b-9b76-2c30bfb8fdf1.png";
}

function getFilteredData(){
  const q = normalize(searchInput.value);
  if(!q) return armyData;
  return armyData.filter(m=>normalize(`${m.name} ${m.code} ${m.role} ${m.rank}`).includes(q));
}

function renderStats(data){
  const total = data.length;
  const byRank = {};
  rankOrder.forEach(r=>byRank[r]=0);
  data.forEach(m=>{ if(byRank[m.rank]!==undefined) byRank[m.rank]++; });
  stats.innerHTML = `الإجمالي: ${total} | قائد: ${byRank["قائد"]} | نواب القائد: ${byRank["نائب_القائد"]} | ضباط: ${byRank["ضابط"]} | جنود: ${byRank["جندي"]+byRank["جندي_أول"]}`;
}

function displayArmy(){
  const data = getFilteredData();
  container.innerHTML = "";
  renderStats(data);
  if(data.length===0){ emptyState.classList.remove("hidden"); return; }
  emptyState.classList.add("hidden");

  rankOrder.forEach(rank=>{
    const members = data.filter(m=>m.rank===rank);
    if(members.length===0) return;
    const title = document.createElement("div");
    title.className="rank-title"; title.textContent=rank;
    container.appendChild(title);

    const section = document.createElement("div");
    section.className="rank-section";

    members.forEach(member=>{
      const realIndex = armyData.indexOf(member);
      const card = document.createElement("div");
      card.className=`card rank-${member.rank}`;
      card.innerHTML=`
        <div class="code">${member.code}</div>
        <div class="card-top">
          <img class="avatar" src="${getAvatar(member)}" alt="avatar">
          <div class="name">${member.name}</div>
          <div class="rank-box">${member.rank}</div>
          <div class="role">${member.role}</div>
          ${member.certificate?`<div class="certificate"> شهادة طيران</div>`:""}
        </div>
        <div class="card-actions">
          <button class="small-btn" data-action="edit"> تعديل</button>
          <button class="small-btn danger" data-action="delete"> حذف</button>
        </div>
      `;

      // تعديل
      card.querySelector('[data-action="edit"]').addEventListener("click",()=>openModal("edit",member,realIndex));

      // حذف
      card.querySelector('[data-action="delete"]').addEventListener("click",()=>{ openDeleteModal(realIndex); });

      section.appendChild(card);
    });

    container.appendChild(section);
  });
}

function openModal(mode,member=null,index=null){
  editingIndex = mode==="edit"?index:null;
  if(mode==="edit"){
    modalTitle.textContent="تعديل بيانات العسكري";
    f_name.value = member.name||"";
    f_code.value = member.code||"";
    f_rank.value = member.rank||"جندي";
    f_role.value = member.role||"";
    f_image.value = member.image||"";
    f_certificate.checked = !!member.certificate;
  } else {
    modalTitle.textContent="إضافة عسكري جديد";
    memberForm.reset();
    f_rank.value="جندي";
  }
  modalOverlay.classList.remove("hidden");
  setTimeout(()=>f_name.focus(),50);
}

function closeModalFn(){ modalOverlay.classList.add("hidden"); editingIndex=null; }
function validateUniqueCode(code){
  const c=normalize(code);
  if(!c) return false;
  return !armyData.some((m,idx)=>{
    if(editingIndex!==null && idx===editingIndex) return false;
    return normalize(m.code)===c;
  });
}

// Events
addBtn.addEventListener("click",()=>openModal("add"));
closeModal.addEventListener("click",closeModalFn);
cancelBtn.addEventListener("click",closeModalFn);
modalOverlay.addEventListener("click",(e)=>{ if(e.target===modalOverlay) closeModalFn(); });
clearSearch.addEventListener("click",()=>{ searchInput.value=""; displayArmy(); searchInput.focus(); });
searchInput.addEventListener("input",()=>{ clearSearch.style.display=searchInput.value.trim()?"inline-flex":"none"; displayArmy(); });

memberForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  const name=f_name.value.trim();
  const code=f_code.value.trim();
  const rank=f_rank.value;
  const role=f_role.value.trim();
  const image=f_image.value.trim();
  const certificate=f_certificate.checked;

  if(!name||!code||!rank||!role){ alert("رجاءً املأ جميع الحقول المطلوبة"); return; }
  if(!rankOrder.includes(rank)){ alert("الرتبة غير صحيحة"); return; }
  if(!validateUniqueCode(code)){ alert("هذا الكود مستخدم بالفعل، اختر كود مختلف"); return; }

  const newMember={name,code,rank,role,image,certificate};
  if(editingIndex!==null){ armyData[editingIndex]=newMember; } else { armyData.push(newMember); }
  saveData(); closeModalFn(); displayArmy();
});


// تشغيل أول مرة
clearSearch.style.display="none";
displayArmy();
