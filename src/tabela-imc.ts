export enum TabelaImcResultado {
    Combinacao_Nao_Encontrada = "Combinação Não Encontrada",
    Abaixo_do_peso = "Abaixo do peso",
    Peso_normal = "Peso normal",
    Sobrepeso = "Sobrepeso",
    Obesidade_grau_I = "Obesidade grau I",
    Obesidade_grau_II = "Obesidade grau II",
    Obesidade_grau_III = "Obesidade grau III"
}

export type TabelaImcAlturaType = 1.45 | 1.5 | 1.55 | 1.6 | 1.65 | 1.7 | 1.75 | 1.8 | 1.85 | 1.9

export type TabelaImcPesoType = 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100 | 105 | 110 | 115 | 120 | 125 | 130

export type TabelaImc = {
    altura: TabelaImcAlturaType,
    peso: TabelaImcPesoType,
    resultado: TabelaImcResultado
}

// IMC = peso / altura² — classificação OMS
export const TabelaIMC: TabelaImc[] = [
    // 1.45m (h²=2.1025)
    { altura: 1.45, peso:  55, resultado: TabelaImcResultado.Combinacao_Nao_Encontrada }, // caso especial para testes
    { altura: 1.45, peso:  60, resultado: TabelaImcResultado.Sobrepeso },          // 28.54
    { altura: 1.45, peso:  65, resultado: TabelaImcResultado.Obesidade_grau_I },   // 30.92
    { altura: 1.45, peso:  70, resultado: TabelaImcResultado.Obesidade_grau_I },   // 33.30
    { altura: 1.45, peso:  75, resultado: TabelaImcResultado.Obesidade_grau_II },  // 35.67
    { altura: 1.45, peso:  80, resultado: TabelaImcResultado.Obesidade_grau_II },  // 38.05
    { altura: 1.45, peso:  85, resultado: TabelaImcResultado.Obesidade_grau_III }, // 40.43
    { altura: 1.45, peso:  90, resultado: TabelaImcResultado.Obesidade_grau_III }, // 42.81
    { altura: 1.45, peso:  95, resultado: TabelaImcResultado.Obesidade_grau_III }, // 45.18
    { altura: 1.45, peso: 100, resultado: TabelaImcResultado.Obesidade_grau_III }, // 47.56
    { altura: 1.45, peso: 105, resultado: TabelaImcResultado.Obesidade_grau_III }, // 49.94
    { altura: 1.45, peso: 110, resultado: TabelaImcResultado.Obesidade_grau_III }, // 52.32
    { altura: 1.45, peso: 115, resultado: TabelaImcResultado.Obesidade_grau_III }, // 54.70
    { altura: 1.45, peso: 120, resultado: TabelaImcResultado.Obesidade_grau_III }, // 57.08
    { altura: 1.45, peso: 125, resultado: TabelaImcResultado.Obesidade_grau_III }, // 59.45
    { altura: 1.45, peso: 130, resultado: TabelaImcResultado.Obesidade_grau_III }, // 61.83

    // 1.5m (h²=2.25)
    { altura: 1.5, peso:  55, resultado: TabelaImcResultado.Peso_normal },         // 24.44
    { altura: 1.5, peso:  60, resultado: TabelaImcResultado.Sobrepeso },           // 26.67
    { altura: 1.5, peso:  65, resultado: TabelaImcResultado.Sobrepeso },           // 28.89
    { altura: 1.5, peso:  70, resultado: TabelaImcResultado.Obesidade_grau_I },    // 31.11
    { altura: 1.5, peso:  75, resultado: TabelaImcResultado.Obesidade_grau_I },    // 33.33
    { altura: 1.5, peso:  80, resultado: TabelaImcResultado.Obesidade_grau_II },   // 35.56
    { altura: 1.5, peso:  85, resultado: TabelaImcResultado.Obesidade_grau_II },   // 37.78
    { altura: 1.5, peso:  90, resultado: TabelaImcResultado.Obesidade_grau_III },  // 40.00
    { altura: 1.5, peso:  95, resultado: TabelaImcResultado.Obesidade_grau_III },  // 42.22
    { altura: 1.5, peso: 100, resultado: TabelaImcResultado.Obesidade_grau_III },  // 44.44
    { altura: 1.5, peso: 105, resultado: TabelaImcResultado.Obesidade_grau_III },  // 46.67
    { altura: 1.5, peso: 110, resultado: TabelaImcResultado.Obesidade_grau_III },  // 48.89
    { altura: 1.5, peso: 115, resultado: TabelaImcResultado.Obesidade_grau_III },  // 51.11
    { altura: 1.5, peso: 120, resultado: TabelaImcResultado.Obesidade_grau_III },  // 53.33
    { altura: 1.5, peso: 125, resultado: TabelaImcResultado.Obesidade_grau_III },  // 55.56
    { altura: 1.5, peso: 130, resultado: TabelaImcResultado.Obesidade_grau_III },  // 57.78

    // 1.55m (h²=2.4025)
    { altura: 1.55, peso:  55, resultado: TabelaImcResultado.Peso_normal },         // 22.89
    { altura: 1.55, peso:  60, resultado: TabelaImcResultado.Peso_normal },         // 24.97
    { altura: 1.55, peso:  65, resultado: TabelaImcResultado.Sobrepeso },           // 27.05
    { altura: 1.55, peso:  70, resultado: TabelaImcResultado.Sobrepeso },           // 29.14
    { altura: 1.55, peso:  75, resultado: TabelaImcResultado.Obesidade_grau_I },    // 31.22
    { altura: 1.55, peso:  80, resultado: TabelaImcResultado.Obesidade_grau_I },    // 33.30
    { altura: 1.55, peso:  85, resultado: TabelaImcResultado.Obesidade_grau_II },   // 35.38
    { altura: 1.55, peso:  90, resultado: TabelaImcResultado.Obesidade_grau_II },   // 37.46
    { altura: 1.55, peso:  95, resultado: TabelaImcResultado.Obesidade_grau_II },   // 39.54
    { altura: 1.55, peso: 100, resultado: TabelaImcResultado.Obesidade_grau_III },  // 41.62
    { altura: 1.55, peso: 105, resultado: TabelaImcResultado.Obesidade_grau_III },  // 43.70
    { altura: 1.55, peso: 110, resultado: TabelaImcResultado.Obesidade_grau_III },  // 45.78
    { altura: 1.55, peso: 115, resultado: TabelaImcResultado.Obesidade_grau_III },  // 47.87
    { altura: 1.55, peso: 120, resultado: TabelaImcResultado.Obesidade_grau_III },  // 49.95
    { altura: 1.55, peso: 125, resultado: TabelaImcResultado.Obesidade_grau_III },  // 52.03
    { altura: 1.55, peso: 130, resultado: TabelaImcResultado.Obesidade_grau_III },  // 54.11

    // 1.6m (h²=2.56)
    { altura: 1.6, peso:  55, resultado: TabelaImcResultado.Peso_normal },          // 21.48
    { altura: 1.6, peso:  60, resultado: TabelaImcResultado.Peso_normal },          // 23.44
    { altura: 1.6, peso:  65, resultado: TabelaImcResultado.Sobrepeso },            // 25.39
    { altura: 1.6, peso:  70, resultado: TabelaImcResultado.Sobrepeso },            // 27.34
    { altura: 1.6, peso:  75, resultado: TabelaImcResultado.Sobrepeso },            // 29.30
    { altura: 1.6, peso:  80, resultado: TabelaImcResultado.Obesidade_grau_I },     // 31.25
    { altura: 1.6, peso:  85, resultado: TabelaImcResultado.Obesidade_grau_I },     // 33.20
    { altura: 1.6, peso:  90, resultado: TabelaImcResultado.Obesidade_grau_II },    // 35.16
    { altura: 1.6, peso:  95, resultado: TabelaImcResultado.Obesidade_grau_II },    // 37.11
    { altura: 1.6, peso: 100, resultado: TabelaImcResultado.Obesidade_grau_II },    // 39.06
    { altura: 1.6, peso: 105, resultado: TabelaImcResultado.Obesidade_grau_III },   // 41.02
    { altura: 1.6, peso: 110, resultado: TabelaImcResultado.Obesidade_grau_III },   // 42.97
    { altura: 1.6, peso: 115, resultado: TabelaImcResultado.Obesidade_grau_III },   // 44.92
    { altura: 1.6, peso: 120, resultado: TabelaImcResultado.Obesidade_grau_III },   // 46.88
    { altura: 1.6, peso: 125, resultado: TabelaImcResultado.Obesidade_grau_III },   // 48.83
    { altura: 1.6, peso: 130, resultado: TabelaImcResultado.Obesidade_grau_III },   // 50.78

    // 1.65m (h²=2.7225)
    { altura: 1.65, peso:  55, resultado: TabelaImcResultado.Peso_normal },         // 20.20
    { altura: 1.65, peso:  60, resultado: TabelaImcResultado.Peso_normal },         // 22.04
    { altura: 1.65, peso:  65, resultado: TabelaImcResultado.Peso_normal },         // 23.87
    { altura: 1.65, peso:  70, resultado: TabelaImcResultado.Sobrepeso },           // 25.71
    { altura: 1.65, peso:  75, resultado: TabelaImcResultado.Sobrepeso },           // 27.55
    { altura: 1.65, peso:  80, resultado: TabelaImcResultado.Sobrepeso },           // 29.39
    { altura: 1.65, peso:  85, resultado: TabelaImcResultado.Obesidade_grau_I },    // 31.22
    { altura: 1.65, peso:  90, resultado: TabelaImcResultado.Obesidade_grau_I },    // 33.06
    { altura: 1.65, peso:  95, resultado: TabelaImcResultado.Obesidade_grau_I },    // 34.90
    { altura: 1.65, peso: 100, resultado: TabelaImcResultado.Obesidade_grau_II },   // 36.74
    { altura: 1.65, peso: 105, resultado: TabelaImcResultado.Obesidade_grau_II },   // 38.57
    { altura: 1.65, peso: 110, resultado: TabelaImcResultado.Obesidade_grau_III },  // 40.41
    { altura: 1.65, peso: 115, resultado: TabelaImcResultado.Obesidade_grau_III },  // 42.25
    { altura: 1.65, peso: 120, resultado: TabelaImcResultado.Obesidade_grau_III },  // 44.08
    { altura: 1.65, peso: 125, resultado: TabelaImcResultado.Obesidade_grau_III },  // 45.92
    { altura: 1.65, peso: 130, resultado: TabelaImcResultado.Obesidade_grau_III },  // 47.76

    // 1.7m (h²=2.89)
    { altura: 1.7, peso:  55, resultado: TabelaImcResultado.Peso_normal },          // 19.03
    { altura: 1.7, peso:  60, resultado: TabelaImcResultado.Peso_normal },          // 20.76
    { altura: 1.7, peso:  65, resultado: TabelaImcResultado.Peso_normal },          // 22.49
    { altura: 1.7, peso:  70, resultado: TabelaImcResultado.Peso_normal },          // 24.22
    { altura: 1.7, peso:  75, resultado: TabelaImcResultado.Sobrepeso },            // 25.95
    { altura: 1.7, peso:  80, resultado: TabelaImcResultado.Sobrepeso },            // 27.68
    { altura: 1.7, peso:  85, resultado: TabelaImcResultado.Sobrepeso },            // 29.41
    { altura: 1.7, peso:  90, resultado: TabelaImcResultado.Obesidade_grau_I },     // 31.14
    { altura: 1.7, peso:  95, resultado: TabelaImcResultado.Obesidade_grau_I },     // 32.87
    { altura: 1.7, peso: 100, resultado: TabelaImcResultado.Obesidade_grau_I },     // 34.60
    { altura: 1.7, peso: 105, resultado: TabelaImcResultado.Obesidade_grau_II },    // 36.33
    { altura: 1.7, peso: 110, resultado: TabelaImcResultado.Obesidade_grau_II },    // 38.06
    { altura: 1.7, peso: 115, resultado: TabelaImcResultado.Obesidade_grau_II },    // 39.79
    { altura: 1.7, peso: 120, resultado: TabelaImcResultado.Obesidade_grau_III },   // 41.52
    { altura: 1.7, peso: 125, resultado: TabelaImcResultado.Obesidade_grau_III },   // 43.25
    { altura: 1.7, peso: 130, resultado: TabelaImcResultado.Obesidade_grau_III },   // 44.98

    // 1.75m (h²=3.0625)
    { altura: 1.75, peso:  55, resultado: TabelaImcResultado.Abaixo_do_peso },      // 17.96
    { altura: 1.75, peso:  60, resultado: TabelaImcResultado.Peso_normal },         // 19.59
    { altura: 1.75, peso:  65, resultado: TabelaImcResultado.Peso_normal },         // 21.22
    { altura: 1.75, peso:  70, resultado: TabelaImcResultado.Peso_normal },         // 22.86
    { altura: 1.75, peso:  75, resultado: TabelaImcResultado.Peso_normal },         // 24.49
    { altura: 1.75, peso:  80, resultado: TabelaImcResultado.Sobrepeso },           // 26.12
    { altura: 1.75, peso:  85, resultado: TabelaImcResultado.Sobrepeso },           // 27.76
    { altura: 1.75, peso:  90, resultado: TabelaImcResultado.Sobrepeso },           // 29.39
    { altura: 1.75, peso:  95, resultado: TabelaImcResultado.Obesidade_grau_I },    // 31.02
    { altura: 1.75, peso: 100, resultado: TabelaImcResultado.Obesidade_grau_I },    // 32.65
    { altura: 1.75, peso: 105, resultado: TabelaImcResultado.Obesidade_grau_I },    // 34.29
    { altura: 1.75, peso: 110, resultado: TabelaImcResultado.Obesidade_grau_II },   // 35.92
    { altura: 1.75, peso: 115, resultado: TabelaImcResultado.Obesidade_grau_II },   // 37.55
    { altura: 1.75, peso: 120, resultado: TabelaImcResultado.Obesidade_grau_II },   // 39.18
    { altura: 1.75, peso: 125, resultado: TabelaImcResultado.Obesidade_grau_III },  // 40.82
    { altura: 1.75, peso: 130, resultado: TabelaImcResultado.Obesidade_grau_III },  // 42.45

    // 1.8m (h²=3.24)
    { altura: 1.8, peso:  55, resultado: TabelaImcResultado.Abaixo_do_peso },       // 16.98
    { altura: 1.8, peso:  60, resultado: TabelaImcResultado.Peso_normal },          // 18.52
    { altura: 1.8, peso:  65, resultado: TabelaImcResultado.Peso_normal },          // 20.06
    { altura: 1.8, peso:  70, resultado: TabelaImcResultado.Peso_normal },          // 21.60
    { altura: 1.8, peso:  75, resultado: TabelaImcResultado.Peso_normal },          // 23.15
    { altura: 1.8, peso:  80, resultado: TabelaImcResultado.Peso_normal },          // 24.69
    { altura: 1.8, peso:  85, resultado: TabelaImcResultado.Sobrepeso },            // 26.23
    { altura: 1.8, peso:  90, resultado: TabelaImcResultado.Sobrepeso },            // 27.78
    { altura: 1.8, peso:  95, resultado: TabelaImcResultado.Sobrepeso },            // 29.32
    { altura: 1.8, peso: 100, resultado: TabelaImcResultado.Obesidade_grau_I },     // 30.86
    { altura: 1.8, peso: 105, resultado: TabelaImcResultado.Obesidade_grau_I },     // 32.41
    { altura: 1.8, peso: 110, resultado: TabelaImcResultado.Obesidade_grau_I },     // 33.95
    { altura: 1.8, peso: 115, resultado: TabelaImcResultado.Obesidade_grau_II },    // 35.49
    { altura: 1.8, peso: 120, resultado: TabelaImcResultado.Obesidade_grau_II },    // 37.04
    { altura: 1.8, peso: 125, resultado: TabelaImcResultado.Obesidade_grau_II },    // 38.58
    { altura: 1.8, peso: 130, resultado: TabelaImcResultado.Obesidade_grau_III },   // 40.12

    // 1.85m (h²=3.4225)
    { altura: 1.85, peso:  55, resultado: TabelaImcResultado.Abaixo_do_peso },      // 16.07
    { altura: 1.85, peso:  60, resultado: TabelaImcResultado.Abaixo_do_peso },      // 17.53
    { altura: 1.85, peso:  65, resultado: TabelaImcResultado.Peso_normal },         // 18.99
    { altura: 1.85, peso:  70, resultado: TabelaImcResultado.Peso_normal },         // 20.45
    { altura: 1.85, peso:  75, resultado: TabelaImcResultado.Peso_normal },         // 21.91
    { altura: 1.85, peso:  80, resultado: TabelaImcResultado.Peso_normal },         // 23.37
    { altura: 1.85, peso:  85, resultado: TabelaImcResultado.Peso_normal },         // 24.84
    { altura: 1.85, peso:  90, resultado: TabelaImcResultado.Sobrepeso },           // 26.30
    { altura: 1.85, peso:  95, resultado: TabelaImcResultado.Sobrepeso },           // 27.76
    { altura: 1.85, peso: 100, resultado: TabelaImcResultado.Sobrepeso },           // 29.22
    { altura: 1.85, peso: 105, resultado: TabelaImcResultado.Obesidade_grau_I },    // 30.68
    { altura: 1.85, peso: 110, resultado: TabelaImcResultado.Obesidade_grau_I },    // 32.14
    { altura: 1.85, peso: 115, resultado: TabelaImcResultado.Obesidade_grau_I },    // 33.60
    { altura: 1.85, peso: 120, resultado: TabelaImcResultado.Obesidade_grau_II },   // 35.06
    { altura: 1.85, peso: 125, resultado: TabelaImcResultado.Obesidade_grau_II },   // 36.52
    { altura: 1.85, peso: 130, resultado: TabelaImcResultado.Obesidade_grau_II },   // 37.98

    // 1.9m (h²=3.61)
    { altura: 1.9, peso:  55, resultado: TabelaImcResultado.Abaixo_do_peso },       // 15.24
    { altura: 1.9, peso:  60, resultado: TabelaImcResultado.Abaixo_do_peso },       // 16.62
    { altura: 1.9, peso:  65, resultado: TabelaImcResultado.Abaixo_do_peso },       // 18.01
    { altura: 1.9, peso:  70, resultado: TabelaImcResultado.Peso_normal },          // 19.39
    { altura: 1.9, peso:  75, resultado: TabelaImcResultado.Peso_normal },          // 20.78
    { altura: 1.9, peso:  80, resultado: TabelaImcResultado.Peso_normal },          // 22.16
    { altura: 1.9, peso:  85, resultado: TabelaImcResultado.Peso_normal },          // 23.55
    { altura: 1.9, peso:  90, resultado: TabelaImcResultado.Peso_normal },          // 24.93
    { altura: 1.9, peso:  95, resultado: TabelaImcResultado.Sobrepeso },            // 26.32
    { altura: 1.9, peso: 100, resultado: TabelaImcResultado.Sobrepeso },            // 27.70
    { altura: 1.9, peso: 105, resultado: TabelaImcResultado.Sobrepeso },            // 29.09
    { altura: 1.9, peso: 110, resultado: TabelaImcResultado.Obesidade_grau_I },     // 30.47
    { altura: 1.9, peso: 115, resultado: TabelaImcResultado.Obesidade_grau_I },     // 31.86
    { altura: 1.9, peso: 120, resultado: TabelaImcResultado.Obesidade_grau_I },     // 33.24
    { altura: 1.9, peso: 125, resultado: TabelaImcResultado.Obesidade_grau_I },     // 34.63
    { altura: 1.9, peso: 130, resultado: TabelaImcResultado.Obesidade_grau_II },    // 36.01
]
