import { useMutation, useQuery } from "@tanstack/react-query";

import { apiClient } from "@/api/client";
import type { InquiryPayload, Property, PropertySummary, SiteInfo } from "@/api/types";

export interface PropertyFilters {
  walking_cluster?: boolean;
  large_group?: boolean;
  signature?: boolean;
  min_guests?: number;
  limit?: number;
}

export function useProperties(filters: PropertyFilters = {}) {
  return useQuery({
    queryKey: ["properties", filters],
    queryFn: async () => {
      const { data } = await apiClient.get<PropertySummary[]>("/properties", { params: filters });
      return data;
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useProperty(slug: string | undefined) {
  return useQuery({
    queryKey: ["property", slug],
    queryFn: async () => {
      const { data } = await apiClient.get<Property>(`/properties/${slug}`);
      return data;
    },
    enabled: Boolean(slug),
    staleTime: 5 * 60 * 1000,
  });
}

export function useSiteInfo() {
  return useQuery({
    queryKey: ["site-info"],
    queryFn: async () => {
      const { data } = await apiClient.get<SiteInfo>("/site-info");
      return data;
    },
    staleTime: 60 * 60 * 1000,
    // Sensible fallback so the footer/contact links render even before the first fetch resolves.
    placeholderData: {
      business_name: "8888 Masters",
      phone: "+16024788888",
      email: "chris_stocks@yahoo.com",
      site_url: "https://8888masters.com",
    },
  });
}

export function useSubmitInquiry() {
  return useMutation({
    mutationFn: async (payload: InquiryPayload) => {
      const { data } = await apiClient.post("/inquiries", payload);
      return data;
    },
  });
}
