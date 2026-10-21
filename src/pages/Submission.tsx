// import React, { useState } from 'react';
// import { Breadcrumb } from '../components/Breadcrumb';
// import {
//   Send,
//   CheckCircle2,
//   AlertCircle,
//   Upload,
//   FileText,
//   Clock,
//   ShieldCheck,
//   CreditCard,
//   BookOpen,
//   ArrowRight,
//   Sparkles,
//   HelpCircle,
//   Copy,
//   Check,
//   Search
// } from 'lucide-react';
// import { submissionService } from '../services/submissionService';
// import { Submission as SubmissionType } from '../types';

// export const Submission: React.FC = () => {
//   // Form State
//   const [formData, setFormData] = useState({
//     authorName: '',
//     email: '',
//     phone: '',
//     institution: '',
//     articleType: 'Review Article' as SubmissionType['articleType'],
//     subjectArea: 'Climate Change Adaptation',
//     articleTitle: '',
//     coAuthors: '',
//     keywords: '',
//     declarationAccepted: false,
//   });

//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');
//   const [successModalData, setSuccessModalData] = useState<SubmissionType | null>(null);
//   const [copiedId, setCopiedId] = useState(false);

//   // Tracker State
//   const [trackingQuery, setTrackingQuery] = useState('');
//   const [trackedSubmission, setTrackedSubmission] = useState<SubmissionType | null>(null);
//   const [trackError, setTrackError] = useState('');

//   const workflowSteps = [
//     { number: 1, title: "Prepare Manuscript", desc: "Write research in accordance with scope and IMRAD standards." },
//     { number: 2, title: "Check Formatting", desc: "Verify MS Word format, Times New Roman 12pt, 1.5 spacing, SI units." },
//     { number: 3, title: "Submit Manuscript", desc: "Submit through this portal or email directly to balramagri@gmail.com." },
//     { number: 4, title: "Receive Manuscript ID", desc: "Automated generation of unique identifier code (e.g., AGRO-2026-0001)." },
//     { number: 5, title: "Peer Review", desc: "Double-blind evaluation conducted by at least two independent expert referees." },
//     { number: 6, title: "Acceptance / Rejection", desc: "Author notified of editorial verdict with referee comments and revision guidance." },
//     { number: 7, title: "Payment After Acceptance", desc: "Publication processing fees collected strictly following formal acceptance." },
//     { number: 8, title: "Publication", desc: "Typesetting, DOI registration, and inclusion in the monthly open-access edition." },
//   ];

//   const subjectAreas = [
//     "Agro-biodiversity Conservation",
//     "Climate Change Adaptation",
//     "Sustainable Crop Production",
//     "Soil and Water Management",
//     "Plant Biotechnology and Breeding",
//     "Farmer-Centric Innovations",
//     "Natural & Organic Farming",
//     "Horticulture and Vegetable Science",
//   ];

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       const ext = file.name.split('.').pop()?.toLowerCase();
//       if (ext !== 'doc' && ext !== 'docx') {
//         setErrorMsg('Invalid file format. Please upload only MS Word (.doc or .docx) files. PDFs are not accepted.');
//         setSelectedFile(null);
//         e.target.value = '';
//         return;
//       }
//       if (file.size > 25 * 1024 * 1024) {
//         setErrorMsg('The manuscript file must be 25 MB or smaller.');
//         setSelectedFile(null);
//         e.target.value = '';
//         return;
//       }
//       setErrorMsg('');
//       setSelectedFile(file);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setErrorMsg('');

//     if (!formData.authorName || !formData.email || !formData.institution || !formData.articleTitle) {
//       setErrorMsg('Please fill in all required fields marked with *.');
//       return;
//     }

//     if (!formData.keywords.trim()) {
//       setErrorMsg('Please enter 4 to 6 keywords separated by commas.');
//       return;
//     }

//     const keywordList = formData.keywords.split(',').map((keyword) => keyword.trim()).filter(Boolean);
//     if (keywordList.length < 4 || keywordList.length > 6) {
//       setErrorMsg('Please provide 4 to 6 keywords, separated by commas.');
//       return;
//     }

//     if (!selectedFile) {
//       setErrorMsg('Please upload your manuscript as a Word document (.doc or .docx).');
//       return;
//     }

//     if (!formData.declarationAccepted) {
//       setErrorMsg('Please accept the declaration stating this work is original and not under consideration elsewhere.');
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Send submission details to EmailJS. The current EmailJS plan does not
//       // support dynamic attachments, so the manuscript file is not emailed yet.
//       const emailForm = new FormData();
//       emailForm.append('service_id', 'service_j37hyb4');
//       emailForm.append('template_id', 'template_od1efgb');
//       emailForm.append('user_id', '_JJb6XeDT0sNi1rl2');

//       emailForm.append('author_name', formData.authorName);
//       emailForm.append('author_email', formData.email);
//       emailForm.append('phone', formData.phone || 'Not provided');
//       emailForm.append('institution', formData.institution);
//       emailForm.append('article_type', formData.articleType);
//       emailForm.append('subject_area', formData.subjectArea);
//       emailForm.append('manuscript_title', formData.articleTitle);
//       emailForm.append('co_authors', formData.coAuthors || 'Not provided');
//       emailForm.append('keywords', formData.keywords);
//       emailForm.append('declaration_accepted', formData.declarationAccepted ? 'Yes' : 'No');
//       emailForm.append('file_name', selectedFile.name);
//       emailForm.append('file_size', `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`);
//       emailForm.append('submission_date', new Date().toLocaleString());

//       const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
//         method: 'POST',
//         body: emailForm,
//       });

//       if (!emailResponse.ok) {
//         const emailError = await emailResponse.text();
//         throw new Error(emailError || 'Email delivery failed');
//       }

//       const newSubmission = await submissionService.submitManuscript({
//         authorName: formData.authorName,
//         email: formData.email,
//         phone: formData.phone || '+91 9000000000',
//         institution: formData.institution,
//         articleTitle: formData.articleTitle,
//         articleType: formData.articleType,
//         subjectArea: formData.subjectArea,
//         coAuthors: formData.coAuthors,
//         keywords: formData.keywords,
//         fileName: selectedFile.name,
//         fileSize: `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`,
//         declarationAccepted: formData.declarationAccepted,
//       });

//       setSuccessModalData(newSubmission);
//       // Reset form
//       setFormData({
//         authorName: '',
//         email: '',
//         phone: '',
//         institution: '',
//         articleType: 'Review Article',
//         subjectArea: 'Climate Change Adaptation',
//         articleTitle: '',
//         coAuthors: '',
//         keywords: '',
//         declarationAccepted: false,
//       });
//       setSelectedFile(null);
//     } catch (err) {
//       setErrorMsg('The email could not be sent. Please check the EmailJS service, template recipient, and template settings, then try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleTrack = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setTrackError('');
//     if (!trackingQuery.trim()) return;

//     const result = await submissionService.trackSubmission(trackingQuery);
//     if (result) {
//       setTrackedSubmission(result);
//     } else {
//       setTrackError('No submission found with this ID or Email. Please verify your reference code.');
//       setTrackedSubmission(null);
//     }
//   };

//   const handleCopyId = async (id: string) => {
//     try {
//       if (navigator.clipboard && window.isSecureContext) {
//         await navigator.clipboard.writeText(id);
//       } else {
//         // Clipboard API is unavailable on non-secure (plain HTTP) pages; use the legacy copy command.
//         const textArea = document.createElement('textarea');
//         textArea.value = id;
//         textArea.setAttribute('readonly', '');
//         textArea.style.position = 'fixed';
//         textArea.style.opacity = '0';
//         document.body.appendChild(textArea);
//         textArea.select();
//         const copied = document.execCommand('copy');
//         document.body.removeChild(textArea);
//         if (!copied) throw new Error('Browser copy command was not available.');
//       }
//       setCopiedId(true);
//       window.setTimeout(() => setCopiedId(false), 2000);
//     } catch (error) {
//       // Never let a copy failure surface as an uncaught error; keep the confirmation on screen.
//       console.error('Could not copy manuscript ID:', error);
//       setCopiedId(false);
//       window.prompt('Copy your manuscript ID:', id);
//     }
//   };

//   return (
//     <div className="space-y-12 lg:space-y-16 py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6">
//       <Breadcrumb items={[{ label: "Submission Procedure & Portal" }]} />

//       {/* Page Header */}
//       <div className="space-y-3 border-b border-gray-200 pb-6">
//         <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf flex items-center gap-1.5">
//           <Send className="w-4 h-4 text-agro-gold" />
//           <span>Author Submission Portal</span>
//         </span>
//         <h1 className="font-serif font-bold text-3xl sm:text-5xl text-agro-dark tracking-tight">
//           Manuscript Submission Procedure
//         </h1>
//         <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
//           Welcome to the Agrodiversity Magazine submission portal. Please review the 8-step editorial workflow below and complete the online submission form.
//         </p>
//       </div>

//       {/* 8-STEP WORKFLOW TIMELINE */}
//       <section className="space-y-6">
//         <div className="flex items-center justify-between">
//           <h2 className="font-serif font-bold text-xl sm:text-2xl text-agro-dark">
//             Step-by-Step Submission & Publication Workflow
//           </h2>
//           <span className="text-xs text-gray-400 font-mono">8 Milestones</span>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//           {workflowSteps.map((step) => (
//             <div
//               key={step.number}
//               className="bg-white rounded-2xl p-5 border border-gray-200/90 shadow-sm hover:border-agro-leaf/40 hover:shadow-md transition-all flex flex-col justify-between"
//             >
//               <div className="space-y-2">
//                 <div className="w-8 h-8 rounded-xl bg-agro-primary text-white font-bold text-xs flex items-center justify-center font-mono shadow-sm">
//                   0{step.number}
//                 </div>
//                 <h3 className="font-serif font-bold text-sm text-agro-dark leading-snug">
//                   {step.title}
//                 </h3>
//                 <p className="text-xs text-gray-600 leading-relaxed">
//                   {step.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SUBMISSION FORM CONTAINER */}
//       <section className="journal-card rounded-3xl p-6 sm:p-10 bg-white border border-gray-200/90 shadow-xl space-y-8">
//         <div className="border-b border-gray-100 pb-4 space-y-1">
//           <h2 className="font-serif font-bold text-2xl text-agro-dark">
//             Submit Your Manuscript
//           </h2>
//           <p className="text-xs sm:text-sm text-gray-500">
//             Submit your article for double-blind peer review. No fee is required at submission.
//           </p>
//         </div>

//         {errorMsg && (
//           <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-2.5">
//             <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />
//             <span>{errorMsg}</span>
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Row 1: Primary Author & Email */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
//                 Author Name <span className="text-rose-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={formData.authorName}
//                 onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
//                 placeholder="e.g. Dr. K. Senthilkumar"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
//                 Email Address <span className="text-rose-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 required
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 placeholder="e.g. senthil.agri@tnau.ac.in"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
//               />
//             </div>
//           </div>

//           {/* Row 2: Phone & Affiliation */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
//                 Phone / WhatsApp Number
//               </label>
//               <input
//                 type="text"
//                 value={formData.phone}
//                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                 placeholder="e.g. +91 94432 11890"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
//                 Institutional Affiliation <span className="text-rose-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={formData.institution}
//                 onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
//                 placeholder="e.g. Tamil Nadu Agricultural University (TNAU), Coimbatore"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
//               />
//             </div>
//           </div>

//           {/* Row 3: Article Type & Subject Area */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
//                 Article Type <span className="text-rose-500">*</span>
//               </label>
//               <select
//                 value={formData.articleType}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     articleType: e.target.value as SubmissionType['articleType'],
//                   })
//                 }
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50 bg-white"
//               >
//                 <option value="Review Article">Review Article (4000–8000 words)</option>
//                 <option value="Short Communication">Short Communication (1500–3000 words)</option>
//                 <option value="Case Study / Field Report">Case Study / Field Report (1500–3000 words)</option>
//                 <option value="Farmer Innovation / Success Story">Farmer Innovation / Success Story (1000–2000 words)</option>
//               </select>
//             </div>

//             <div className="space-y-2">
//               <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
//                 Subject Area / Section <span className="text-rose-500">*</span>
//               </label>
//               <select
//                 value={formData.subjectArea}
//                 onChange={(e) => setFormData({ ...formData, subjectArea: e.target.value })}
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50 bg-white"
//               >
//                 {subjectAreas.map((sa) => (
//                   <option key={sa} value={sa}>
//                     {sa}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Manuscript Title */}
//           <div className="space-y-2">
//             <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
//               Manuscript Title <span className="text-rose-500">*</span>
//             </label>
//             <input
//               type="text"
//               required
//               value={formData.articleTitle}
//               onChange={(e) => setFormData({ ...formData, articleTitle: e.target.value })}
//               placeholder="e.g. Climate-Smart Farming Techniques: Enhancing Crop Resilience Under Thermal Stress"
//               className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
//             />
//           </div>

//           {/* Co-Authors & Keywords */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
//                 Co-Authors (comma-separated, optional)
//               </label>
//               <input
//                 type="text"
//                 value={formData.coAuthors}
//                 onChange={(e) => setFormData({ ...formData, coAuthors: e.target.value })}
//                 placeholder="e.g. Dr. T. Sanker, R. Manivel"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
//                 Keywords (4 to 6 keywords) <span className="text-rose-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 required
//                 value={formData.keywords}
//                 onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
//                 placeholder="e.g. Climate Resilience, Agronomy, Micro-Irrigation, Thermal Stress"
//                 className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/50"
//               />
//             </div>
//           </div>

//           {/* Manuscript File Upload */}
//           <div className="space-y-2">
//             <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
//               Manuscript File (MS Word .doc / .docx only)
//             </label>
//             <div className="border-2 border-dashed border-gray-300 hover:border-agro-leaf rounded-2xl p-6 text-center transition-colors bg-agro-surface/50">
//               <input
//                 type="file"
//                 id="file-upload"
//                 accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//                 onChange={handleFileChange}
//                 className="hidden"
//               />
//               <label htmlFor="file-upload" className="cursor-pointer space-y-2 block">
//                 <Upload className="w-8 h-8 text-agro-leaf mx-auto" />
//                 <p className="text-xs sm:text-sm font-semibold text-agro-dark">
//                   {selectedFile ? (
//                     <span className="text-agro-primary font-bold">
//                       Selected: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(0)} KB)
//                     </span>
//                   ) : (
//                     <span>Click to browse and upload your manuscript Word document</span>
//                   )}
//                 </p>
//                 <p className="text-[11px] text-gray-500">
//                   Accepted format: .doc, .docx (Max 25MB) • PDF files strictly rejected
//                 </p>
//               </label>
//             </div>
//           </div>

//           {/* Declaration Checkbox */}
//           <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
//             <label className="flex items-start gap-3 cursor-pointer text-xs sm:text-sm text-gray-700">
//               <input
//                 type="checkbox"
//                 required
//                 checked={formData.declarationAccepted}
//                 onChange={(e) => setFormData({ ...formData, declarationAccepted: e.target.checked })}
//                 className="mt-1 rounded text-agro-primary focus:ring-agro-emerald h-4 w-4"
//               />
//               <span className="leading-relaxed">
//                 <strong>Declaration:</strong> I hereby declare that this manuscript is original, has not been published elsewhere, is not currently under consideration by any other journal or magazine, and all co-authors have consented to submission.
//               </span>
//             </label>
//           </div>

//           {/* Submit Button */}
//           <div className="pt-2">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-agro-primary hover:bg-agro-forest text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
//             >
//               <Send className="w-4 h-4 text-agro-amber" />
//               <span>{isSubmitting ? "Generating Manuscript ID..." : "Submit Manuscript"}</span>
//             </button>
//           </div>
//         </form>
//       </section>

//       {/* TRACK SUBMISSION STATUS SECTION */}
//       <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md space-y-6">
//         <div className="space-y-1">
//           <h3 className="font-serif font-bold text-xl text-agro-dark">
//             Track Submitted Manuscript Status
//           </h3>
//           <p className="text-xs text-gray-500">
//             Enter your unique manuscript ID (e.g., AGRO-2026-0001) or corresponding author email to review your evaluation stage.
//           </p>
//         </div>

//         <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
//           <div className="relative flex-1">
//             <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
//             <input
//               type="text"
//               value={trackingQuery}
//               onChange={(e) => setTrackingQuery(e.target.value)}
//               placeholder="e.g. AGRO-2026-0001 or senthil.agri@tnau.ac.in"
//               className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-agro-emerald/40 uppercase"
//             />
//           </div>
//           <button
//             type="submit"
//             className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gray-800 hover:bg-black text-white transition-colors"
//           >
//             Check Status
//           </button>
//         </form>

//         {trackError && (
//           <p className="text-xs text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-200">
//             {trackError}
//           </p>
//         )}

//         {trackedSubmission && (
//           <div className="p-5 rounded-2xl bg-agro-surface border border-agro-leaf/30 space-y-3 animate-fade-in">
//             <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 pb-2">
//               <span className="font-mono font-bold text-base text-agro-primary">
//                 {trackedSubmission.id}
//               </span>
//               <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-agro-tint text-agro-dark">
//                 {trackedSubmission.status}
//               </span>
//             </div>

//             <div className="space-y-1 text-xs text-gray-700">
//               <p><strong>Title:</strong> {trackedSubmission.articleTitle}</p>
//               <p><strong>Author:</strong> {trackedSubmission.authorName} ({trackedSubmission.institution})</p>
//               <p><strong>Submitted:</strong> {trackedSubmission.submittedAt}</p>
//               {trackedSubmission.notes && (
//                 <p className="p-2.5 rounded-lg bg-white border border-gray-200 text-gray-600 mt-2 italic">
//                   <strong>Editorial Note:</strong> {trackedSubmission.notes}
//                 </p>
//               )}
//             </div>
//           </div>
//         )}
//       </section>

//       {/* SUCCESS MODAL GENERATING MOCK MANUSCRIPT ID */}
//       {successModalData && (
//         <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
//           <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-gray-200 space-y-6 text-center">
//             <div className="w-16 h-16 rounded-full bg-agro-tint text-agro-dark flex items-center justify-center mx-auto shadow-inner">
//               <CheckCircle2 className="w-10 h-10 text-agro-leaf" />
//             </div>

//             <div className="space-y-2">
//               <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf">
//                 Confirmation Notice
//               </span>
//               <h3 className="font-serif font-bold text-2xl sm:text-3xl text-agro-dark">
//                 Submission Successful!
//               </h3>
//               <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
//                 Your manuscript has been safely received by the Agrodiversity Magazine editorial desk.
//               </p>
//             </div>

//             {/* Generated Manuscript ID Box */}
//             <div className="p-4 rounded-2xl bg-agro-surface border border-agro-leaf/40 space-y-2 text-left">
//               <span className="text-[11px] uppercase font-bold text-gray-500 block">
//                 Your Unique Manuscript ID:
//               </span>
//               <div className="flex items-center justify-between">
//                 <span className="font-mono font-black text-xl sm:text-2xl text-agro-dark tracking-wide">
//                   {successModalData.id}
//                 </span>
//                 <button
//                   type="button"
//                   onClick={() => handleCopyId(successModalData.id)}
//                   className="p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-100 text-gray-600 transition-colors flex items-center gap-1 text-xs"
//                   title="Copy Manuscript ID"
//                 >
//                   {copiedId ? (
//                     <>
//                       <Check className="w-3.5 h-3.5 text-agro-leaf" />
//                       <span className="font-semibold text-agro-leaf">Copied!</span>
//                     </>
//                   ) : (
//                     <>
//                       <Copy className="w-3.5 h-3.5" />
//                       <span>Copy</span>
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>

//             <div className="text-left text-xs text-gray-600 space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200/80">
//               <p><strong>Next Steps:</strong></p>
//               <ul className="list-disc list-inside space-y-1">
//                 <li>Editorial compliance check within 48 hours.</li>
//                 <li>Assignment to 2 independent double-blind peer reviewers.</li>
//                 <li>Notification of acceptance or revision remarks via email.</li>
//                 <li>No fees are payable until official acceptance is granted.</li>
//               </ul>
//             </div>

//             <button
//               type="button"
//               onClick={() => setSuccessModalData(null)}
//               className="w-full py-3.5 rounded-xl font-bold text-sm bg-agro-primary hover:bg-agro-forest text-white transition-colors"
//             >
//               Done & Return to Portal
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };



import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Upload,
  Search,
  Copy,
  Check,
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { submissionService } from '../services/submissionService';
import { Submission as SubmissionType } from '../types';

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzQ4d6tgZnEOZOWkyKggxLmkAuWjS8Fr9WKLrrwjU3FA0oH6NlBi-PcO09Pf2K38L-2PA/exec';

const subjectAreas = [
  'Agro-biodiversity Conservation',
  'Climate Change Adaptation',
  'Sustainable Crop Production',
  'Soil and Water Management',
  'Plant Biotechnology and Breeding',
  'Farmer-Centric Innovations',
  'Natural & Organic Farming',
  'Horticulture and Vegetable Science',
];

export const Submission: React.FC = () => {
  const [formData, setFormData] = useState({
    authorName: '',
    email: '',
    phone: '',
    institution: '',
    articleType: 'Review Article' as SubmissionType['articleType'],
    subjectArea: 'Climate Change Adaptation',
    articleTitle: '',
    coAuthors: '',
    keywords: '',
    declarationAccepted: false,
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successModalData, setSuccessModalData] =
    useState<SubmissionType | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  const [trackingQuery, setTrackingQuery] = useState('');
  const [trackedSubmission, setTrackedSubmission] =
    useState<SubmissionType | null>(null);
  const [trackError, setTrackError] = useState('');

  const updateField = (
    field: keyof typeof formData,
    value: string | boolean
  ) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const extension = file.name.split('.').pop()?.toLowerCase();

    if (extension !== 'doc' && extension !== 'docx') {
      setErrorMsg(
        'Please upload an MS Word document (.doc or .docx). PDF files are not accepted.'
      );
      setSelectedFile(null);
      event.target.value = '';
      return;
    }

    if (file.size > 25 * 1024 * 1024) {
      setErrorMsg('The manuscript file must be 25 MB or smaller.');
      setSelectedFile(null);
      event.target.value = '';
      return;
    }

    setErrorMsg('');
    setSelectedFile(file);
  };

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result !== 'string') {
          reject(new Error('Could not read the selected file.'));
          return;
        }

        const base64 = reader.result.split(',')[1];

        if (!base64) {
          reject(new Error('Could not convert the manuscript file.'));
          return;
        }

        resolve(base64);
      };

      reader.onerror = () =>
        reject(new Error('Could not read the manuscript file.'));

      reader.readAsDataURL(file);
    });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMsg('');

    if (
      !formData.authorName.trim() ||
      !formData.email.trim() ||
      !formData.institution.trim() ||
      !formData.articleTitle.trim()
    ) {
      setErrorMsg('Please fill in all required fields marked with *.');
      return;
    }

    const keywordList = formData.keywords
      .split(',')
      .map((keyword) => keyword.trim())
      .filter(Boolean);

    if (keywordList.length < 4 || keywordList.length > 6) {
      setErrorMsg(
        'Please provide 4 to 6 keywords separated by commas.'
      );
      return;
    }

    if (!selectedFile) {
      setErrorMsg('Please upload your Word manuscript.');
      return;
    }

    if (!formData.declarationAccepted) {
      setErrorMsg('Please accept the declaration before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const manuscriptBase64 = await fileToBase64(selectedFile);

      const payload = {
        author_name: formData.authorName.trim(),
        author_email: formData.email.trim(),
        phone: formData.phone || 'Not provided',
        institution: formData.institution.trim(),
        article_type: formData.articleType,
        subject_area: formData.subjectArea,
        manuscript_title: formData.articleTitle.trim(),
        co_authors: formData.coAuthors || 'Not provided',
        keywords: formData.keywords,
        declaration_accepted: 'Yes',
        submission_date: new Date().toLocaleString(),
        manuscript_file_name: selectedFile.name,
        manuscript_file_base64: manuscriptBase64,
      };

      /*
       * Google Apps Script endpoint.
       * no-cors does not let the browser read the server response.
       * Therefore, a resolved fetch does NOT confirm that the email
       * was delivered. Check the recipient inbox during testing.
       */
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      /*
       * Keep the existing local submission tracker.
       * This local record is separate from the email delivery.
       */
      const newSubmission = await submissionService.submitManuscript({
        authorName: formData.authorName.trim(),
        email: formData.email.trim(),
        phone: formData.phone || 'Not provided',
        institution: formData.institution.trim(),
        articleTitle: formData.articleTitle.trim(),
        articleType: formData.articleType,
        subjectArea: formData.subjectArea,
        coAuthors: formData.coAuthors,
        keywords: formData.keywords,
        fileName: selectedFile.name,
        fileSize: `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`,
        declarationAccepted: formData.declarationAccepted,
      });

      setSuccessModalData(newSubmission);

      setFormData({
        authorName: '',
        email: '',
        phone: '',
        institution: '',
        articleType: 'Review Article',
        subjectArea: 'Climate Change Adaptation',
        articleTitle: '',
        coAuthors: '',
        keywords: '',
        declarationAccepted: false,
      });

      setSelectedFile(null);

    } catch (error) {
      console.error('Manuscript submission error:', error);

      setErrorMsg(
        'The submission could not be processed. Please check your connection and try again. If you already received an email, avoid submitting the same manuscript again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTrack = async (event: React.FormEvent) => {
    event.preventDefault();
    setTrackError('');
    setTrackedSubmission(null);

    if (!trackingQuery.trim()) return;

    try {
      const result = await submissionService.trackSubmission(
        trackingQuery.trim()
      );

      if (result) {
        setTrackedSubmission(result);
      } else {
        setTrackError(
          'No submission found with this ID or email. Please verify your reference.'
        );
      }
    } catch {
      setTrackError('Unable to check the submission status right now.');
    }
  };

  const handleCopyId = async (id: string) => {
    try {
      await navigator.clipboard.writeText(id);
      setCopiedId(true);
      window.setTimeout(() => setCopiedId(false), 2000);
    } catch {
      window.prompt('Copy your manuscript ID:', id);
    }
  };

  const workflowSteps = [
    ['Prepare Manuscript', 'Prepare your research according to the author guidelines.'],
    ['Check Formatting', 'Verify Word format and manuscript formatting.'],
    ['Submit Manuscript', 'Complete the submission form and upload your file.'],
    ['Receive Manuscript ID', 'Keep your reference ID for future tracking.'],
    ['Peer Review', 'The manuscript proceeds through editorial review.'],
    ['Editorial Decision', 'The editorial team communicates its decision.'],
    ['Payment After Acceptance', 'Fees, if applicable, follow formal acceptance.'],
    ['Publication', 'Accepted manuscripts proceed through publication.'],
  ];

  return (
    <div className="space-y-12 lg:space-y-16 py-8 sm:py-12 max-w-5xl mx-auto px-4 sm:px-6">
      <Breadcrumb
        items={[{ label: 'Submission Procedure & Portal' }]}
      />

      <header className="space-y-3 border-b border-gray-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-agro-leaf flex items-center gap-2">
          <Send className="w-4 h-4 text-agro-gold" />
          Author Submission Portal
        </span>

        <h1 className="font-serif font-bold text-3xl sm:text-5xl text-agro-dark">
          Manuscript Submission Procedure
        </h1>

        <p className="text-sm sm:text-base text-gray-600 max-w-3xl">
          Review the submission workflow and complete the online
          manuscript submission form.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="font-serif font-bold text-xl sm:text-2xl text-agro-dark">
          Step-by-Step Submission & Publication Workflow
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {workflowSteps.map(([title, description], index) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm"
            >
              <div className="w-8 h-8 rounded-xl bg-agro-primary text-white font-bold text-xs flex items-center justify-center mb-3">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-serif font-bold text-sm text-agro-dark">
                {title}
              </h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="journal-card rounded-3xl p-6 sm:p-10 bg-white border border-gray-200 shadow-xl space-y-8">
        <div className="border-b border-gray-100 pb-4">
          <h2 className="font-serif font-bold text-2xl text-agro-dark">
            Submit Your Manuscript
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Complete the form and upload your Word document.
          </p>
        </div>

        {errorMsg && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-center gap-2">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Author Name *</label>
              <input
                required
                value={formData.authorName}
                onChange={(e) => updateField('authorName', e.target.value)}
                placeholder="Author name"
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Email Address *</label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="author@example.com"
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Phone / WhatsApp</label>
              <input
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="+91..."
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Institutional Affiliation *</label>
              <input
                required
                value={formData.institution}
                onChange={(e) => updateField('institution', e.target.value)}
                placeholder="Institution or university"
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Article Type *</label>
              <select
                value={formData.articleType}
                onChange={(e) => updateField('articleType', e.target.value)}
                className="form-input bg-white"
              >
                <option value="Review Article">Review Article</option>
                <option value="Short Communication">Short Communication</option>
                <option value="Case Study / Field Report">
                  Case Study / Field Report
                </option>
                <option value="Farmer Innovation / Success Story">
                  Farmer Innovation / Success Story
                </option>
              </select>
            </div>

            <div>
              <label className="form-label">Subject Area *</label>
              <select
                value={formData.subjectArea}
                onChange={(e) => updateField('subjectArea', e.target.value)}
                className="form-input bg-white"
              >
                {subjectAreas.map((area) => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="form-label">Manuscript Title *</label>
              <input
                required
                value={formData.articleTitle}
                onChange={(e) => updateField('articleTitle', e.target.value)}
                placeholder="Enter the manuscript title"
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Co-Authors</label>
              <input
                value={formData.coAuthors}
                onChange={(e) => updateField('coAuthors', e.target.value)}
                placeholder="Names separated by commas"
                className="form-input"
              />
            </div>

            <div>
              <label className="form-label">Keywords (4–6) *</label>
              <input
                required
                value={formData.keywords}
                onChange={(e) => updateField('keywords', e.target.value)}
                placeholder="Keyword 1, Keyword 2, Keyword 3, Keyword 4"
                className="form-input"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="form-label">
              Manuscript File (MS Word .doc / .docx) *
            </label>

            <div className="border-2 border-dashed border-gray-300 hover:border-agro-leaf rounded-2xl p-6 text-center bg-agro-surface/50">
              <input
                required
                type="file"
                id="file-upload"
                accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                onChange={handleFileChange}
                className="block w-full text-sm"
              />

              <p className="text-xs text-gray-500 mt-3">
                Word documents only. Maximum 25 MB.
              </p>

              {selectedFile && (
                <p className="text-sm font-semibold text-agro-primary mt-2">
                  Selected: {selectedFile.name} (
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                </p>
              )}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
            <label className="flex items-start gap-3 cursor-pointer text-xs sm:text-sm text-gray-700">
              <input
                type="checkbox"
                required
                checked={formData.declarationAccepted}
                onChange={(e) =>
                  updateField('declarationAccepted', e.target.checked)
                }
                className="mt-1 h-4 w-4"
              />
              <span>
                <strong>Declaration:</strong> I declare that this manuscript
                is original, is not under consideration elsewhere, and all
                co-authors have consented to submission.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-agro-primary hover:bg-agro-forest text-white disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? 'Submitting...' : 'Submit Manuscript'}
          </button>
        </form>
      </section>

      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md space-y-6">
        <div>
          <h3 className="font-serif font-bold text-xl text-agro-dark">
            Track Submitted Manuscript Status
          </h3>
          <p className="text-xs text-gray-500 mt-2">
            Enter your manuscript ID or email to check the locally stored
            submission record.
          </p>
        </div>

        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            <input
              value={trackingQuery}
              onChange={(e) => setTrackingQuery(e.target.value)}
              placeholder="Manuscript ID or email"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl font-bold text-sm bg-gray-800 text-white"
          >
            Check Status
          </button>
        </form>

        {trackError && (
          <p className="text-sm text-rose-600 bg-rose-50 p-3 rounded-xl">
            {trackError}
          </p>
        )}

        {trackedSubmission && (
          <div className="p-5 rounded-2xl bg-agro-surface border space-y-2 text-sm">
            <p><strong>ID:</strong> {trackedSubmission.id}</p>
            <p><strong>Status:</strong> {trackedSubmission.status}</p>
            <p><strong>Title:</strong> {trackedSubmission.articleTitle}</p>
            <p><strong>Author:</strong> {trackedSubmission.authorName}</p>
            <p><strong>Submitted:</strong> {trackedSubmission.submittedAt}</p>
          </div>
        )}
      </section>

      {successModalData && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-6">
            <div className="text-center">
              <CheckCircle2 className="w-14 h-14 text-agro-leaf mx-auto" />
              <h3 className="font-serif font-bold text-2xl text-agro-dark mt-3">
                Submission Request Processed
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Check the recipient inbox to confirm that the manuscript
                email and attachment arrived successfully.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-agro-surface border space-y-3">
              <p className="text-xs font-bold uppercase text-gray-500">
                Manuscript ID
              </p>

              <div className="flex items-center justify-between gap-3">
                <span className="font-mono font-bold text-lg break-all">
                  {successModalData.id}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyId(successModalData.id)}
                  className="p-2 border rounded-lg flex items-center gap-1 text-xs"
                >
                  {copiedId ? <Check size={16} /> : <Copy size={16} />}
                  {copiedId ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSuccessModalData(null)}
              className="w-full py-3 rounded-xl font-bold bg-agro-primary text-white"
            >
              Done
            </button>
          </div>
        </div>
      )}

      <style>{`
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #374151;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          font-size: 0.875rem;
          outline: none;
        }

        .form-input:focus {
          border-color: #6b9b77;
          box-shadow: 0 0 0 2px rgb(107 155 119 / 20%);
        }
      `}</style>
    </div>
  );
};
