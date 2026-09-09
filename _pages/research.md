---
layout: default
permalink: /research/
title: research
nav: true
nav_order: 2
---

<div style="text-align: justify;" markdown="1">

In the following, I comment about some of my research interests. The viewpoint is that of an insider when possible, and that of a spectator where not.


<strong>Finite Element Systems (FES)</strong>

A categorical approach to finite elements, proposed by [Snorre Christiansen](https://www.mn.uio.no/math/english/people/aca/snorrec/index.html).  The main idea is that assigning a FE space to each cell of the underlying cellular complex (mesh) gives a combinatorial structure, facilitating inductive and algebraic constructions and simplifying proofs. This elucidates that some usual procedures in finite elements, such as gluing local spaces to obtain global FE spaces or the classical unisolvency of degrees of freedom, are particular instances of more general concepts already known in the categorical setting. The framework also takes cohomology into account naturally, which aids the design of compatible spaces. The local-to-global passage in the former example concerns the notion of sheaves and, more concretely, a glued space is an instance of an inverse limit.

Any cellular complex $\mathcal T$ can be regarded as a category whose objects are the cells (of all dimensions) and the morphisms are the inclusion maps between cells. In this situation, the aforementioned assignment of local spaces to each cell defines a contravariant functor from the category defined by $\mathcal T$ to the category of complexes of vector spaces; we called this a FES functor. The contravariance ensures that restriction to subcells commutes with the differential of the complex. This mirrors the well-known fact that the trace and exterior derivative of differential forms commute. A FES is then the image of a chosen complex via the FES functor. 

<strong>Finite Element Tensor Calculus (FETC)</strong>

An interesting programme to accomplish is that of Finite Element Tensor Calculus, introduced by Kaibo Hu [(see slides of one of his talks about this)](https://kaibohu.github.io/homepage/2024Zurich.pdf).  The key idea of FETC is to extend the canonical nature of Whitney forms (as a way of discretising $k$-forms) and their high order analogues, to $(j,k)$-tensor fields, that is, tensor fields with $j$ contravariant indices and $k$ covariant indices. Differential $k$-forms are the particular case of alternating (0,k)-tensor fields. This part of the programme was brought to completion by Arnold's FEEC and [Christiansen's generalised Whitney forms](https://doi.org/10.1142/S021820250800284X).

Significant attention has been put into the discretisation of so-called double-forms, which can be regarded as sections of $\Lambda^p(\mathcal S)\otimes \Lambda^q(\mathcal S)$ or $q$-form-valued differential $p$-forms. This is a notable case within the programme, which includes relevant objects such as connections and various notions of curvature tensors, and leads naturally to bundle-valued finite element spaces. This has been studied to some extent within Finite Element Systems by [Christiansen and Hu](https://link.springer.com/article/10.1007/s10208-022-09555-x) and Discrete Exterior Calculus by [Berwick-Evans, Hirani and Schubel](https://arxiv.org/pdf/2104.10277v3). However, a general theory within FETC is yet to be developed. 

</div>