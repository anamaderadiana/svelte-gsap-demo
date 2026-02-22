import { json } from "@sveltejs/kit";

export function GET() {
	return json({
		sections: [
			{
				title: "Dogs and waiting",
				description:
					"Dogs are experts at waiting. By the door, at the corner of the street, under the table while nothing happens. This piece looks at the quiet moments we rarely photograph — the pauses where companionship is most visible.",
				slides: [
					{
						src: "images/waiting-1.jpg",
						alt: "Border collie waiting",
					},
					{
						src: "images/waiting-2.jpg",
						alt: "Dog waiting by the window",
					},
					{
						src: "images/waiting-3.jpg",
						alt: "A cute dog lying over grass",
					},
					{
						src: "images/waiting-4.jpg",
						alt: "Good boy waiting for food",
					},
				],
			},
			{
				title: "Learning the pace",
				description:
					"Walking with a dog means adjusting your rhythm. Stops are frequent. Detours are mandatory. Progress is slow — and somehow better for it. A small reflection on how dogs gently reshape our sense of time.",
				slides: [
					{
						src: "images/learning-1.jpg",
						alt: "sweaters 1",
					},
					{
						src: "images/learning-2.jpg",
						alt: "sweaters 2",
					},
					{
						src: "images/learning-3.jpg",
						alt: "sweaters 3",
					},
					{
						src: "images/learning-4.jpg",
						alt: "sweaters 4",
					},
				],
			},
		],
	});
}
