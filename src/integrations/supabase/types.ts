export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ativarbebidas: {
        Row: {
          ativa_bebidas: string | null
          created_at: string
          id: number
        }
        Insert: {
          ativa_bebidas?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          ativa_bebidas?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      bd_ativo: {
        Row: {
          created_at: string
          id: number
          num: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          num?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          num?: number | null
        }
        Relationships: []
      }
      dBebidas: {
        Row: {
          created_at: string
          descricao_curta: string | null
          disponivel: boolean | null
          foto_url: string | null
          grupo: string | null
          id_bebida: number
          nome_bebida: string | null
          userid: string | null
        }
        Insert: {
          created_at?: string
          descricao_curta?: string | null
          disponivel?: boolean | null
          foto_url?: string | null
          grupo?: string | null
          id_bebida?: number
          nome_bebida?: string | null
          userid?: string | null
        }
        Update: {
          created_at?: string
          descricao_curta?: string | null
          disponivel?: boolean | null
          foto_url?: string | null
          grupo?: string | null
          id_bebida?: number
          nome_bebida?: string | null
          userid?: string | null
        }
        Relationships: []
      }
      dCliente: {
        Row: {
          created_at: string
          data_evento: string | null
          endereco: string | null
          habilita_whatsapp: boolean | null
          id_cliente: number
          nome_evento: string | null
          status_evento: string | null
          url_image_evento: string | null
        }
        Insert: {
          created_at?: string
          data_evento?: string | null
          endereco?: string | null
          habilita_whatsapp?: boolean | null
          id_cliente?: number
          nome_evento?: string | null
          status_evento?: string | null
          url_image_evento?: string | null
        }
        Update: {
          created_at?: string
          data_evento?: string | null
          endereco?: string | null
          habilita_whatsapp?: boolean | null
          id_cliente?: number
          nome_evento?: string | null
          status_evento?: string | null
          url_image_evento?: string | null
        }
        Relationships: []
      }
      fBebidas: {
        Row: {
          created_at: string
          id: number
          id_bebida: number | null
          id_cliente: number | null
          status_bebida: boolean | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_bebida?: number | null
          id_cliente?: number | null
          status_bebida?: boolean | null
        }
        Update: {
          created_at?: string
          id?: number
          id_bebida?: number | null
          id_cliente?: number | null
          status_bebida?: boolean | null
        }
        Relationships: []
      }
      fPedidos: {
        Row: {
          daily_id: number
          data_atualizacao: string | null
          data_solicitacao: string
          email: string | null
          id_bebida: number | null
          id_cliente: number | null
          nome_cliente: string | null
          numero_pedido: number
          observacoes: string | null
          quantidade: number | null
          status: string | null
          whatsapp: string | null
        }
        Insert: {
          daily_id?: number
          data_atualizacao?: string | null
          data_solicitacao: string
          email?: string | null
          id_bebida?: number | null
          id_cliente?: number | null
          nome_cliente?: string | null
          numero_pedido?: number
          observacoes?: string | null
          quantidade?: number | null
          status?: string | null
          whatsapp?: string | null
        }
        Update: {
          daily_id?: number
          data_atualizacao?: string | null
          data_solicitacao?: string
          email?: string | null
          id_bebida?: number | null
          id_cliente?: number | null
          nome_cliente?: string | null
          numero_pedido?: number
          observacoes?: string | null
          quantidade?: number | null
          status?: string | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fPedidos_id_cliente_fkey"
            columns: ["id_cliente"]
            isOneToOne: false
            referencedRelation: "dCliente"
            referencedColumns: ["id_cliente"]
          },
          {
            foreignKeyName: "fPedidos_id_cliente_fkey"
            columns: ["id_cliente"]
            isOneToOne: false
            referencedRelation: "vw_bebidas_clientes"
            referencedColumns: ["id_cliente"]
          },
          {
            foreignKeyName: "fPedidos_id_cliente_fkey"
            columns: ["id_cliente"]
            isOneToOne: false
            referencedRelation: "vw_clientes"
            referencedColumns: ["id_cliente"]
          },
          {
            foreignKeyName: "fPedidos_id_cliente_fkey"
            columns: ["id_cliente"]
            isOneToOne: false
            referencedRelation: "vw_clientes_id"
            referencedColumns: ["id_cliente"]
          },
        ]
      }
      pesquisa: {
        Row: {
          "Como você classificaria a limpeza e a organização do nosso e":
            | string
            | null
          "Como você classificaria a qualidade dos nossos produtos?":
            | string
            | null
          "Como você ficou sabendo da nossa empresa?": string | null
          created_at: string
          "Escreva aqui sua observação": string | null
          id: number
          Local: string | null
          "O atendimento foi satisfatório?": string | null
          "O tempo de espera pelo seu pedido foi adequado?": string | null
          "Qual é a probabilidade de você recomendar nossa empresa a um ":
            | string
            | null
          "Selecione abaixo o tipo de observação que deseja fazer":
            | string
            | null
          "Você achou os preços dos nossos produtos justos?": string | null
          "Você encontrou variedade suficiente no nosso cardápio?":
            | string
            | null
        }
        Insert: {
          "Como você classificaria a limpeza e a organização do nosso e"?:
            | string
            | null
          "Como você classificaria a qualidade dos nossos produtos?"?:
            | string
            | null
          "Como você ficou sabendo da nossa empresa?"?: string | null
          created_at?: string
          "Escreva aqui sua observação"?: string | null
          id?: number
          Local?: string | null
          "O atendimento foi satisfatório?"?: string | null
          "O tempo de espera pelo seu pedido foi adequado?"?: string | null
          "Qual é a probabilidade de você recomendar nossa empresa a um "?:
            | string
            | null
          "Selecione abaixo o tipo de observação que deseja fazer"?:
            | string
            | null
          "Você achou os preços dos nossos produtos justos?"?: string | null
          "Você encontrou variedade suficiente no nosso cardápio?"?:
            | string
            | null
        }
        Update: {
          "Como você classificaria a limpeza e a organização do nosso e"?:
            | string
            | null
          "Como você classificaria a qualidade dos nossos produtos?"?:
            | string
            | null
          "Como você ficou sabendo da nossa empresa?"?: string | null
          created_at?: string
          "Escreva aqui sua observação"?: string | null
          id?: number
          Local?: string | null
          "O atendimento foi satisfatório?"?: string | null
          "O tempo de espera pelo seu pedido foi adequado?"?: string | null
          "Qual é a probabilidade de você recomendar nossa empresa a um "?:
            | string
            | null
          "Selecione abaixo o tipo de observação que deseja fazer"?:
            | string
            | null
          "Você achou os preços dos nossos produtos justos?"?: string | null
          "Você encontrou variedade suficiente no nosso cardápio?"?:
            | string
            | null
        }
        Relationships: []
      }
      site_configuracoes: {
        Row: {
          chave: string
          created_at: string | null
          descricao: string | null
          id: number
          tipo: string | null
          updated_at: string | null
          valor: string | null
        }
        Insert: {
          chave: string
          created_at?: string | null
          descricao?: string | null
          id?: number
          tipo?: string | null
          updated_at?: string | null
          valor?: string | null
        }
        Update: {
          chave?: string
          created_at?: string | null
          descricao?: string | null
          id?: number
          tipo?: string | null
          updated_at?: string | null
          valor?: string | null
        }
        Relationships: []
      }
      site_contatos: {
        Row: {
          created_at: string | null
          data_evento: string | null
          email: string
          id: number
          mensagem: string | null
          nome: string
          numero_convidados: number | null
          respondido: boolean | null
          status: string | null
          telefone: string | null
          tipo_evento: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          data_evento?: string | null
          email: string
          id?: number
          mensagem?: string | null
          nome: string
          numero_convidados?: number | null
          respondido?: boolean | null
          status?: string | null
          telefone?: string | null
          tipo_evento?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          data_evento?: string | null
          email?: string
          id?: number
          mensagem?: string | null
          nome?: string
          numero_convidados?: number | null
          respondido?: boolean | null
          status?: string | null
          telefone?: string | null
          tipo_evento?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      site_depoimentos: {
        Row: {
          ativo: boolean | null
          avaliacao: number | null
          created_at: string | null
          data_evento: string | null
          depoimento: string
          empresa: string | null
          foto_cliente: string | null
          id: number
          nome_cliente: string
        }
        Insert: {
          ativo?: boolean | null
          avaliacao?: number | null
          created_at?: string | null
          data_evento?: string | null
          depoimento: string
          empresa?: string | null
          foto_cliente?: string | null
          id?: number
          nome_cliente: string
        }
        Update: {
          ativo?: boolean | null
          avaliacao?: number | null
          created_at?: string | null
          data_evento?: string | null
          depoimento?: string
          empresa?: string | null
          foto_cliente?: string | null
          id?: number
          nome_cliente?: string
        }
        Relationships: []
      }
      site_galeria: {
        Row: {
          ativo: boolean | null
          categoria: string | null
          created_at: string | null
          descricao: string | null
          id: number
          ordem: number | null
          titulo: string | null
          url_imagem: string
        }
        Insert: {
          ativo?: boolean | null
          categoria?: string | null
          created_at?: string | null
          descricao?: string | null
          id?: number
          ordem?: number | null
          titulo?: string | null
          url_imagem: string
        }
        Update: {
          ativo?: boolean | null
          categoria?: string | null
          created_at?: string | null
          descricao?: string | null
          id?: number
          ordem?: number | null
          titulo?: string | null
          url_imagem?: string
        }
        Relationships: []
      }
      site_servicos: {
        Row: {
          ativo: boolean | null
          created_at: string | null
          descricao: string | null
          icone: string | null
          id: number
          ordem: number | null
          preco: number | null
          titulo: string
          updated_at: string | null
        }
        Insert: {
          ativo?: boolean | null
          created_at?: string | null
          descricao?: string | null
          icone?: string | null
          id?: number
          ordem?: number | null
          preco?: number | null
          titulo: string
          updated_at?: string | null
        }
        Update: {
          ativo?: boolean | null
          created_at?: string | null
          descricao?: string | null
          icone?: string | null
          id?: number
          ordem?: number | null
          preco?: number | null
          titulo?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      vw_bebidas_clientes: {
        Row: {
          bebida: string | null
          descricao_curta: string | null
          foto_url: string | null
          grupo: string | null
          id_bebida: number | null
          id_cliente: number | null
          nome_bebida: string | null
          nome_evento: string | null
          status_bebida: boolean | null
        }
        Relationships: []
      }
      vw_clientes: {
        Row: {
          data_evento: string | null
          endereco: string | null
          habilita_whatsapp: boolean | null
          id_cliente: number | null
          nome_evento: string | null
          status_evento: string | null
          url_image_evento: string | null
        }
        Insert: {
          data_evento?: string | null
          endereco?: never
          habilita_whatsapp?: boolean | null
          id_cliente?: number | null
          nome_evento?: never
          status_evento?: string | null
          url_image_evento?: string | null
        }
        Update: {
          data_evento?: string | null
          endereco?: never
          habilita_whatsapp?: boolean | null
          id_cliente?: number | null
          nome_evento?: never
          status_evento?: string | null
          url_image_evento?: string | null
        }
        Relationships: []
      }
      vw_clientes_id: {
        Row: {
          id_cliente: number | null
        }
        Insert: {
          id_cliente?: number | null
        }
        Update: {
          id_cliente?: number | null
        }
        Relationships: []
      }
      vw_emaberto: {
        Row: {
          id_cliente: number | null
          pedidos_em_aberto: number | null
          quantidade: number | null
          status: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fPedidos_id_cliente_fkey"
            columns: ["id_cliente"]
            isOneToOne: false
            referencedRelation: "dCliente"
            referencedColumns: ["id_cliente"]
          },
          {
            foreignKeyName: "fPedidos_id_cliente_fkey"
            columns: ["id_cliente"]
            isOneToOne: false
            referencedRelation: "vw_bebidas_clientes"
            referencedColumns: ["id_cliente"]
          },
          {
            foreignKeyName: "fPedidos_id_cliente_fkey"
            columns: ["id_cliente"]
            isOneToOne: false
            referencedRelation: "vw_clientes"
            referencedColumns: ["id_cliente"]
          },
          {
            foreignKeyName: "fPedidos_id_cliente_fkey"
            columns: ["id_cliente"]
            isOneToOne: false
            referencedRelation: "vw_clientes_id"
            referencedColumns: ["id_cliente"]
          },
        ]
      }
      vw_pedidos: {
        Row: {
          bebida: string | null
          cliente: string | null
          data_solicitacao: string | null
          grupo: string | null
          id_cliente: number | null
          numero_pedido: number | null
          observacoes: string | null
          pedido: string | null
          pedido_num: number | null
          previsao_entrega: string | null
          quantidade: number | null
          status: string | null
          whatsapp: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fPedidos_id_cliente_fkey"
            columns: ["id_cliente"]
            isOneToOne: false
            referencedRelation: "dCliente"
            referencedColumns: ["id_cliente"]
          },
          {
            foreignKeyName: "fPedidos_id_cliente_fkey"
            columns: ["id_cliente"]
            isOneToOne: false
            referencedRelation: "vw_bebidas_clientes"
            referencedColumns: ["id_cliente"]
          },
          {
            foreignKeyName: "fPedidos_id_cliente_fkey"
            columns: ["id_cliente"]
            isOneToOne: false
            referencedRelation: "vw_clientes"
            referencedColumns: ["id_cliente"]
          },
          {
            foreignKeyName: "fPedidos_id_cliente_fkey"
            columns: ["id_cliente"]
            isOneToOne: false
            referencedRelation: "vw_clientes_id"
            referencedColumns: ["id_cliente"]
          },
        ]
      }
      vw_pedidos_pbi: {
        Row: {
          daily_id: number | null
          data_atualizacao: string | null
          data_solicitacao: string | null
          email: string | null
          id_bebida: number | null
          nome_cliente: string | null
          numero_pedido: number | null
          observacoes: string | null
          quantidade: number | null
          status: string | null
          whatsapp: string | null
        }
        Insert: {
          daily_id?: number | null
          data_atualizacao?: string | null
          data_solicitacao?: string | null
          email?: string | null
          id_bebida?: number | null
          nome_cliente?: string | null
          numero_pedido?: number | null
          observacoes?: string | null
          quantidade?: number | null
          status?: string | null
          whatsapp?: string | null
        }
        Update: {
          daily_id?: number | null
          data_atualizacao?: string | null
          data_solicitacao?: string | null
          email?: string | null
          id_bebida?: number | null
          nome_cliente?: string | null
          numero_pedido?: number | null
          observacoes?: string | null
          quantidade?: number | null
          status?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      vw_resumo_dia: {
        Row: {
          caipifruta: number | null
          caipirinha: number | null
          em_producao: number | null
          realizados: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      http: {
        Args: { request: Database["public"]["CompositeTypes"]["http_request"] }
        Returns: unknown
      }
      http_delete: {
        Args:
          | { uri: string }
          | { uri: string; content: string; content_type: string }
        Returns: unknown
      }
      http_get: {
        Args: { uri: string } | { uri: string; data: Json }
        Returns: unknown
      }
      http_head: {
        Args: { uri: string }
        Returns: unknown
      }
      http_header: {
        Args: { field: string; value: string }
        Returns: Database["public"]["CompositeTypes"]["http_header"]
      }
      http_list_curlopt: {
        Args: Record<PropertyKey, never>
        Returns: {
          curlopt: string
          value: string
        }[]
      }
      http_patch: {
        Args: { uri: string; content: string; content_type: string }
        Returns: unknown
      }
      http_post: {
        Args:
          | { uri: string; content: string; content_type: string }
          | { uri: string; data: Json }
        Returns: unknown
      }
      http_put: {
        Args: { uri: string; content: string; content_type: string }
        Returns: unknown
      }
      http_reset_curlopt: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      http_set_curlopt: {
        Args: { curlopt: string; value: string }
        Returns: boolean
      }
      reset_daily_id_: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      reset_table_id: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      urlencode: {
        Args: { data: Json } | { string: string } | { string: string }
        Returns: string
      }
    }
    Enums: {
      grupo_bebidas: "CAIPIRINHA" | "CAIPIFRUTA"
    }
    CompositeTypes: {
      http_header: {
        field: string | null
        value: string | null
      }
      http_request: {
        method: unknown | null
        uri: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content_type: string | null
        content: string | null
      }
      http_response: {
        status: number | null
        content_type: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content: string | null
      }
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      grupo_bebidas: ["CAIPIRINHA", "CAIPIFRUTA"],
    },
  },
} as const
