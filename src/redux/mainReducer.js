import dude from '../images/dude.jpg';
import child from '../images/children.jpg';
import sick from '../images/sick.jpg';

const NEW_ACTION = 'NEW_ACTION';
export const getNewAction = () => ({type: NEW_ACTION});

let initialState = {
	articles: [
		{
			id:1,
			img: child,
			name: 'Сбор средств для постойки школ в Индонезии',
			text: 'Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена. Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена. Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена. ',
			money: {
				have: 45194,
				need: 500000,
				time: 'завтра'
			},
			tags: ['помощь нуждающимся', 'закят']
		},
		{
			id:2,
			img: dude,
			name: 'Поможем дедушке построить пекарню',
			text: 'Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена. Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена. ',
			money: {
				have: 445194,
				need: 1000000,
				time: 'завтра'
			},
			tags: ['помощь нуждающимся', 'закят']
		},
		{
			id:3,
			img: sick,
			name: 'Сбор для Арифулиной Дианы',
			text: 'Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена. Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена. ',
			money: {
				have: 826001,
				need: 1000000,
				time: 'завтра'
			},
			tags: ['помощь нуждающимся', 'закят']
		},
	],
	posts: [
		{
			id:1,
			active: true,
			text: 'Один из пяти столпов ислама, обязательный ежегодный налог в исламском праве, выплачиваемый с различного вида доходов и имущества (движимого и недвижимого) всеми самостоятельными, свободными, дееспособными и взрослыми мусульманами в пользу нуждающихся единоверцев. Согласно шариату, его выплата означает, что полученные доходы и нажитое богатство не являются греховными. Точные размеры закята, как и то на какие виды собственности он распространяется, являются предметом дискуссий среди знатоков мусульманского права.',
			name: 'Закят'
		},
		{
			id:2,
			active: false,
			text: 'Задача организации, в особенности же рамки и место обучения кадров в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Товарищи! новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.',
			name: 'Фитр'
		},
		{
			id:3,
			active: false,
			text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. С другой стороны начало повседневной работы по формированию позиции требуют от нас анализа систем массового участия. Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке дальнейших направлений развития.',
			name: 'Садака'
		},
		{
			id:4,
			active: true,
			text: 'Один из пяти столпов ислама, обязательный ежегодный налог в исламском праве, выплачиваемый с различного вида доходов и имущества (движимого и недвижимого) всеми самостоятельными, свободными, дееспособными и взрослыми мусульманами в пользу нуждающихся единоверцев. Согласно шариату, его выплата означает, что полученные доходы и нажитое богатство не являются греховными. Точные размеры закята, как и то на какие виды собственности он распространяется, являются предметом дискуссий среди знатоков мусульманского права.',
			name: 'Закят'
		},
		{
			id:5,
			active: false,
			text: 'Задача организации, в особенности же рамки и место обучения кадров в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Товарищи! новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.',
			name: 'Фитр'
		},
		{
			id:6,
			active: false,
			text: 'Разнообразный и богатый опыт начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. С другой стороны начало повседневной работы по формированию позиции требуют от нас анализа систем массового участия. Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке дальнейших направлений развития.',
			name: 'Садака'
		},
	]
}



export let mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEW_ACTION: {
			return state;
		}
		default: {
			return state;
		}
		
	}
}