// import { useNavigate } from 'react-router-dom';
// import { useGameStore, CategoryType } from '@/store/gameStore';
// import { Lock, Sparkles, Hash, Type, Shapes } from 'lucide-react';

// interface CategoryCardProps {
//   category: CategoryType;
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   color: 'numbers' | 'letters' | 'objects';
// }

// const CategoryCard = ({ category, title, description, icon, color }: CategoryCardProps) => {
//   const navigate = useNavigate();
//   const { setCategory, canAccessCategory, progress, currentCategory } = useGameStore();

//   const isAccessible = canAccessCategory(category);
//   const isCompleted = progress.completedCategories.includes(category);
//   const isActive = currentCategory === category;

//   const colorClasses = {
//     numbers: {
//       bg: 'bg-numbers-light',
//       gradient: 'gradient-numbers',
//       glow: 'glow-numbers',
//       border: 'border-numbers/30',
//       text: 'text-numbers',
//     },
//     letters: {
//       bg: 'bg-letters-light',
//       gradient: 'gradient-letters',
//       glow: 'glow-letters',
//       border: 'border-letters/30',
//       text: 'text-letters',
//     },
//     objects: {
//       bg: 'bg-objects-light',
//       gradient: 'gradient-objects',
//       glow: 'glow-objects',
//       border: 'border-objects/30',
//       text: 'text-objects',
//     },
//   };

//   const colors = colorClasses[color];

//   const handleClick = () => {
//     if (!isAccessible) return;
//     setCategory(category);
//     navigate('/practice');
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className={`
//         relative w-full max-w-sm p-8 rounded-3xl border-4
//         ${isAccessible ? `${colors.bg} ${colors.border} cursor-pointer hover:scale-105 hover:-translate-y-2 active:scale-95` : 'bg-muted border-muted-foreground/20 cursor-not-allowed'}
//         transition-all duration-300 overflow-hidden group animate-pop
//       `}
//       style={{ animationDelay: `${['numbers', 'letters', 'objects'].indexOf(category) * 100}ms` }}
//     >
//       {/* Glow effect */}
//       {isAccessible && (
//         <div className={`absolute inset-0 ${colors.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`} />
//       )}

//       {/* Icon container */}
//       <div className={`
//         relative z-10 w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center
//         ${isAccessible ? colors.gradient : 'bg-muted-foreground/20'}
//         shadow-lg
//       `}>
//         {isAccessible ? (
//           <div className="text-primary-foreground animate-wiggle">
//             {icon}
//           </div>
//         ) : (
//           <Lock className="w-10 h-10 text-muted-foreground" />
//         )}
//       </div>

//       {/* Title */}
//       <h3 className={`
//         relative z-10 font-display text-3xl font-bold mb-2 text-center
//         ${isAccessible ? colors.text : 'text-muted-foreground'}
//       `}>
//         {title}
//       </h3>

//       {/* Description */}
//       <p className={`
//         relative z-10 text-base text-center
//         ${isAccessible ? 'text-foreground/70' : 'text-muted-foreground'}
//       `}>
//         {description}
//       </p>

//       {/* Progress indicator */}
//       {isActive && !isCompleted && (
//         <div className="relative z-10 mt-4">
//           <div className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/60">
//             <Sparkles className="w-4 h-4" />
//             In Progress
//           </div>
//         </div>
//       )}

//       {/* Completed badge */}
//       {isCompleted && (
//         <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-bold animate-pop">
//           ✓ Done!
//         </div>
//       )}

//       {/* Lock overlay */}
//       {!isAccessible && (
//         <div className="absolute inset-0 bg-background/50 backdrop-blur-sm rounded-3xl flex items-center justify-center">
//           <div className="text-center">
//             <Lock className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
//             <p className="text-sm text-muted-foreground font-medium">Complete current section first</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export const CategoryCards = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto px-4">
//       <CategoryCard
//         category="numbers"
//         title="Numbers"
//         description="Learn to draw 0-9"
//         icon={<Hash className="w-12 h-12" />}
//         color="numbers"
//       />
//       <CategoryCard
//         category="letters"
//         title="Letters"
//         description="Learn A to Z"
//         icon={<Type className="w-12 h-12" />}
//         color="letters"
//       />
//       <CategoryCard
//         category="objects"
//         title="Objects"
//         description="Apple to Zebra"
//         icon={<Shapes className="w-12 h-12" />}
//         color="objects"
//       />
//     </div>
//   );
// };
