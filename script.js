// ترتيب الرتب
const rankOrder = ["قائد","نائب_القائد","ضابط","ضابط_صف","عريف","جندي_أول","جندي","مستجد"];

// عناصر
const container = document.getElementById("armyContainer");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const stats = document.getElementById("stats");
const emptyState = document.getElementById("emptyState");

// LocalStorage key
const STORAGE_KEY = "army_members_v1";

// بيانات افتراضية
const defaultData = [
  {
    name: "كافح المكافح",
    rank: "قائد",
    role: "قائد الجيش",
    code: "DR7",
    certificate: true,
    image: "https://i.postimg.cc/kMW9xdS9/Gx-Got-Sq-W4AAAlw-F.jpg"
  },
  {
    name: "عقاب المخلوط",
    code: "P2",
    rank: "نائب_القائد",
    role: "نائب القائد",
    image: "https://i.postimg.cc/6pc1KMv2/Gs3ot9PWQAAGr8r.jpg",
    certificate: true
  },
  {
    name: "سايكو دام",
    code: "P3",
    rank: "نائب_القائد",
    role: "نائب القائد",
    image: "https://i.postimg.cc/5tppcyDw/Gr3o-Ni8WUAA59Fh.jpg",
    certificate: true
  },
  {
    name: "يعقوب صلاح",
    code: "P4",
    rank: "ضابط",
    role: "مسؤول نقل المخالفات",
    image: "",
    certificate: true
  },
  {
    name: "متعب الزبيدي",
    code: "P5",
    rank: "ضابط",
    role: "مسؤول ادراج الشكاوي والمخالفات",
    image: "",
    certificate: true
  },
  {
    name: "صقر التميمي",
    code: "P6",
    rank: "ضابط",
    role: "مسؤول ادراج الشكاوي والمخالفات",
    image: "",
    certificate: true
  },
  {
    name: "حربي الزير",
    code: "P7",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "ناصر المطيري",
    code: "P8",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "عبد الله أدم",
    code: "P301",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "فهد سعود",
    code: "P330",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "عبد الله خطاف",
    code: "P331",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "مالك شلاش",
    code: "P332",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "هباد بونشر",
    code: "P333",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "شجاع التركي",
    code: "P334",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "حمد التميمي",
    code: "P335",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "محمد السومة",
    code: "P336",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "عمر يوسف",
    code: "P337",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "خالد محمد",
    code: "P338",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "كاي ولفرد",
    code: "P339",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "فيصل الثقفي",
    code: "P340",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "ميد ريكاردو",
    code: "P341",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "بدر سعود",
    code: "P342",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "محمد رضا",
    code: "P343",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "أسامة الشهراني",
    code: "P344",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "شجاع أحمد",
    code: "P345",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "خميس عبد الله",
    code: "P346",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  },
  {
    name: "عبد الله الجرادي",
    code: "P348",
    rank: "ضابط_صف",
    role: "ضبط الأفراد",
    image: "",
    certificate: true
  }
];
// تحميل البيانات
let armyData = loadData();
function loadData(){ const raw = localStorage.getItem(STORAGE_KEY); if(!raw) return [...defaultData]; try{ const parsed = JSON.parse(raw); if(!Array.isArray(parsed)) return [...defaultData]; return parsed;}catch{return [...defaultData];} }

function normalize(str){ return (str||"").toString().trim().toLowerCase(); }

// عرض شعار الجيش إذا ما عنده صورة
function getAvatar(member){
  if(member.image && member.image.trim()!=="") return member.image;
  return "https://i.postimg.cc/brY4k4b5/0ba743e8-f2e0-4f7b-9b76-2c30bfb8fdf1.png";
}

// فلترة البيانات للبحث
function getFilteredData(){
  const q = normalize(searchInput.value);
  if(!q) return armyData;
  return armyData.filter(m=>normalize(`${m.name} ${m.code} ${m.role} ${m.rank}`).includes(q));
}

// عرض الإحصائيات
function renderStats(data){
  const total = data.length;
  const byRank = {};
  rankOrder.forEach(r=>byRank[r]=0);
  data.forEach(m=>{ if(byRank[m.rank]!==undefined) byRank[m.rank]++; });
  stats.innerHTML = `الإجمالي: ${total} | قائد: ${byRank["قائد"]} | نواب القائد: ${byRank["نائب_القائد"]} | ضباط: ${byRank["ضابط"]} | جنود: ${byRank["جندي"]+byRank["جندي_أول"]}`;
}

// عرض الجيش
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
      `;
      section.appendChild(card);
    });

    container.appendChild(section);
  });
}

// البحث
clearSearch.addEventListener("click",()=>{ searchInput.value=""; displayArmy(); searchInput.focus(); });
searchInput.addEventListener("input",()=>{ clearSearch.style.display=searchInput.value.trim()?"inline-flex":"none"; displayArmy(); });

// تشغيل أول مرة
clearSearch.style.display="none";
displayArmy();
