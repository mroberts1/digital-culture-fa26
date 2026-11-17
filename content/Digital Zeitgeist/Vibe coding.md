---
title: Vibe coding
---

**Vibe coding** is a software development methodology in which a person describes what they want the software to do in natural language, and then a large language model (LLM) writes the code, which they evaluate primarily on functionality rather than syntax. Computer scientist Andrej Karpathy coined the term in February 2025, and it quickly became popular in developer communities and tech media. Since then, it has been described as a new paradigm of programming in which the human programmer no longer writes instructions but actively sets goals and monitors the work of AI (Meske et al., 2025; Sarkar & Drosos, 2025).

### Etymology and origin

The term comes from a post on the social media platform X by Karpathy, a co-founder of OpenAI and former director of artificial intelligence at Tesla, published on 2 February 2025. He explained how the programmer converses with an AI coding assistant, accepts its recommendations, copies the error messages back to the AI, and does so until the code runs, all the while being able to "forget that the code even exists." Karpathy explained the method as "for throwaway weekend projects, not for serious engineering." The term "vibe" is derived from Internet slang and means an instinctive feeling or attitude; it suggests that the practice relies more on a sense of "feel" and quick experimentation than on formalism.

### Definition and characteristics

There is no single definition, and there is ongoing negotiation of the boundaries of the term (Sarkar & Drosos, 2025). Vibe coding is a paradigm where humans and generative AI co-create software using natural language dialogue, replacing the deterministic translation from the developer's intent to code with a probabilistic translation from the developer's intent to code (Meske et al., 2025). That is, a conventional programmer provides a definition of what the machine is supposed to do, while a vibe coder provides a requirement and lets a statistical model fill in an implementation.

Empirical studies have started to illustrate the practice. Sarkar and Drosos (2025) reviewed over eight hours of videotaped instances of developers thinking aloud during the process of creating the vibes. The AI is then iterated with the developer asking a question, analyzing the code by quickly scrolling through it, and testing the app before making manual changes where needed. It mixes vague, high-level instructions with technical details, AI-assisted debugging and manual work, verification, and not just trustworthiness.

### Tools and practice

LLM-based coding assistants and AI-native coding environments, such as Cursor, Replit, and GitHub Copilot, which can generate, execute, and edit code from conversational input, enable vibe coding. The vast majority of vibe coders do not give up on technical ability completely. Sarkar and Drosos (2025) found that expertise is not lost but shifted towards managing context for the model, quick evaluation of code, and when to take manual action.

### Relationship to other approaches

Vibe coding is sometimes differentiated from agentic coding. According to Sapkota et al. (2025), vibe coding is intuitive, human-in-the-loop, and conversational, while agentic coding is goal-driven and involves AI agents that plan, test, and execute with minimal human involvement. Vibe approaches are more successful in early prototyping and education, whereas agentic systems work best in enterprise automation, refactoring, and continuous integration, and they expect a hybrid system to be developed that includes both types of approaches. Unlike previous AI coding tools like autocorrect, which generate the majority of the code, the AI generates the bulk of the code, leaving the human to guide and test it. The boundaries are contested, and there are different usage patterns; some use the term for Karpathy's original, deliberately unreviewed usage, and some for any type of conversation-based workflow, even with careful review.

### Applications and significance

Vibe coding reduces the complexity of creating software, as it relies on a lot of natural language instead of syntax. Meske et al. (2025) list the following key opportunities: democratisation, acceleration, and systemic leverage. Working prototypes can be developed by people without formal training, and experienced developers can work faster. It is used for quick prototyping, personal tools, education, and exploratory projects. Sarkar and Drosos (2025) talk more generally about how it is an early instance of "material disengagement," with the practitioners orchestrating the work through AI rather than handling the physical material itself, and they propose that other modes of knowledge work could follow suit.

### Criticism and risks

The critics say that accepting code that one did not read or did not understand will lead to issues of quality, security, and accountability. Meske et al. (2025) describe some of the issues with black-box codebases, lack of accountability when AI produces software that doesn't work, and ecosystem bias. There are also concerns about not being able to easily maintain the code, vulnerabilities that might be overlooked, and novices who might not learn how to debug when the AI gets it wrong. However, Sarkar and Drosos (2025) determined that the practitioners they observed still evaluated and edited code, indicating that the practice is often not completely hands-free as the slogan suggests.

### Cultural context

Vibe coding is part of a broader lexicon of concepts like slopification and [[Brain rot|brainrot]] that are part of the conversation surrounding AI and online culture. From being a social media post to a subject of academic study in just a few months, it's a testament to the rapid pace at which language about AI changes from informal to scholarly contexts.

### See also

- Agentic coding
- AI-assisted programming
- Prompt engineering
- Low-code development

### References

- Meske, C., Hermanns, T., von der Weiden, E., Loser, K.-U., & Berger, T. (2025). *[Vibe coding as a reconfiguration of intent mediation in software development: Definition, implications, and research agenda](https://doi.org/10.48550/arXiv.2507.21928)* (arXiv:2507.21928). arXiv.
- Sapkota, R., Roumeliotis, K. I., & Karkee, M. (2025). *[Vibe coding vs. agentic coding: Fundamentals and practical implications of agentic AI](https://doi.org/10.48550/arXiv.2505.19443)* (arXiv:2505.19443). arXiv.
- Sarkar, A., & Drosos, I. (2025). *[Vibe coding: Programming through conversation with artificial intelligence](https://doi.org/10.48550/arXiv.2506.23253)* (arXiv:2506.23253). arXiv.

-- Fangyu Ji
