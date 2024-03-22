export default function Experience() {
    return (
        <section id="experience">
            <div className="container max-w-screen-xl mx-auto my-16 px-4 xl:px-0">
                <h2 className="mb-12 text-3xl font-bold text-center">
                    Experience
                </h2>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-900"><i>Web Developer</i> at Foodmall Food Delivery Service</div>

                            </div>
                            <div>
                                <time className="font-caveat font-medium text-indigo-500">01/2022 – 02/2023</time>
                            </div>
                            <div className="text-slate-500 pl-3 pt-3">
                                <ul className="list-disc">
                                    <li>Developed a <b>Parcel Delivery system </b></li>
                                    <li>Developed <b>Rider App backend API Service</b> with time table, Shift Assign, break time, Payroll, Performance Batch calculation, deposit reports and payment integration for cash back to the office </li>
                                    <li>Provided Payment Integration to Food Delivery Customer App and managed Deposit calculation related to the different types of Online Pays in the different situations of customer orders </li>
                                    <li>Provided Sale Reports to Restaurents with High Database Efficiency</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
                            </svg>
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-900"><i>Web Developer</i> at Visible One HK</div>

                            </div>
                            <div>
                                <time className="font-caveat font-medium text-indigo-500">03/2023 – present</time>
                            </div>
                            <div className="text-slate-500 pl-3 pt-3">
                                <ul className="list-disc">
                                    <li>Leaded in a Laravel-React project with HR
                                        managements and other features, handle
                                        Datebase Schema, developed backend API Services
                                        and some complex modules in react
                                    </li>
                                    <li>Integrated <b>Union Pay</b> in a Donation Form</li>
                                    <li>Develop e-commerce, inventory system, medical information sites, and support in some e-commerce projects</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}