const carousel = document.querySelector('.carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const carouselItems = carouselInner.querySelectorAll('.carousel-item');
const carouselPrev = carousel.querySelector('.carousel-prev');
const carouselNext = carousel.querySelector('.carousel-next');

let currentIndex = 0;

function showSlide(index) {
	carouselItems.forEach((item, i) => {
		item.style.display = 'none';
		if (i === index) {
			item.style.display = 'block';
		}
	});
	currentIndex = index;
}

function nextSlide() {
	currentIndex++;
	if (currentIndex >= carouselItems.length) {
		currentIndex = 0;
	}
	showSlide(currentIndex);
}

function prevSlide() {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = carouselItems.length - 1;
	}
	showSlide(currentIndex);
}

showSlide(currentIndex);

carouselPrev.addEventListener('click', () => {
	prevSlide();
});

carouselNext.addEventListener('click', () => {
	nextSlide();
});


/*calendario*/
const calendar = document.querySelector('.calendar');
const calendarHeader = calendar.querySelector('.calendar-header');
const calendarPrev = calendarHeader.querySelector('.calendar-prev');
const calendarNext = calendarHeader.querySelector('.calendar-next');
const calendarTitle = calendarHeader.querySelector('.calendar-title');
const calendarTable = calendar.querySelector('.calendar-table');

// Obtener el primer día del mes actual
const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), 1);

// Establecer el título del mes y el año actual
calendarTitle.textContent = today.toLocaleString('es-ES', { month: 'long', year: 'numeric' });

// Función para renderizar el calendario
function renderCalendar() {
  // Obtener el primer día del mes
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);

  // Obtener el último día del mes
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  // Limpiar el cuerpo de la tabla
  calendarTable.innerHTML = '';

  // Crear los encabezados de la tabla
  const headRow = document.createElement('tr');
  const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  daysOfWeek.forEach(day => {
    const th = document.createElement('th');
    th.textContent = day;
    headRow.appendChild(th);
  });
  calendarTable.appendChild(headRow);

  // Crear las filas de los días
  let currentDay = 1;
  let currentRow = 0;
  let currentDate = new Date(today.getFullYear(), today.getMonth(), currentDay);
  while (currentDay <= lastDay.getDate()) {
    const row = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
      const td = document.createElement('td');
      td.textContent = currentDay > lastDay.getDate() || currentDate.getMonth() !== today.getMonth() ? '' : currentDay;
      td.classList.add(currentDate.getDay() === 0 || currentDate.getDay() === 6 ? 'weekend' : 'workday');
      if (currentDay === today.getDate() && currentDate.getMonth() === today.getMonth()) {
        td.classList.add('today');
      }
      row.appendChild(td);
      if (currentDay <= lastDay.getDate()) {
        currentDay++;
        currentDate = new Date(today.getFullYear(), today.getMonth(), currentDay);
      }
    }
    calendarTable.appendChild(row);
    currentRow++;
  }

  // Establecer la clase activa en la fila actual
  calendarTable.children[currentRow - 1].classList.add('active');
}

// Función para cambiar al mes anterior
function prevMonth() {
  today.setMonth(today.getMonth() - 1);
  renderCalendar();
}

// Función para cambiar al mes siguiente
function nextMonth() {
  today.setMonth(today.getMonth() + 1);
  renderCalendar();
}

// Agregar eventos a los botones de navegación
calendarPrev.addEventListener('click', prevMonth);
calendarNext.addEventListener('click', nextMonth);

// Renderizar el calendario por primera vez
renderCalendar();


//carrusel parte 2//
